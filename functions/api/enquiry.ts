interface Env {
  RESEND_API_KEY: string;
  ENQUIRY_TO_EMAIL: string;
  FROM_EMAIL: string;
}

interface EnquiryBody {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  subject?: string;
  message?: string;
  website?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => {
  console.log("env:", env);
  console.log("Sending enquiry email to:", env.ENQUIRY_TO_EMAIL);
  console.log("Sending confirmation email to:", env.FROM_EMAIL);
  console.log("API Key:", env.RESEND_API_KEY);
  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO_EMAIL || !env.FROM_EMAIL) {
    return json(
      { success: false, error: "The enquiry service is not configured yet." },
      503,
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ success: false, error: "Invalid request format." }, 415);
  }

  let body: EnquiryBody;
  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return json({ success: false, error: "Invalid enquiry details." }, 400);
  }

  // Silently accept bot submissions in the honeypot without sending email.
  // if (body.website?.trim()) {
  //   return json({ success: true });
  // }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const phone = body.phone?.trim() || "";
  const service = body.service?.trim() || "";
  const subject = body.subject?.trim() || "";
  const message = body.message?.trim() || "";

  if (!name || !email || !service || !message) {
    return json(
      { success: false, error: "Please complete all required fields." },
      400,
    );
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    phone.length > 40 ||
    service.length > 120 ||
    subject.length > 180 ||
    message.length > 5000
  ) {
    return json(
      { success: false, error: "One or more fields are too long." },
      400,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(
      { success: false, error: "Please enter a valid email address." },
      400,
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeService = escapeHtml(service);
  const safeSubject = escapeHtml(subject || "Website enquiry");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const sendEmail = async (payload: Record<string, unknown>) => {
    console.log("Sending email with payload:", payload);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log("Resend API response status:", response);
    if (!response.ok) {
      const errorText = await response.text();
      // Do not return provider details or secrets to the public browser.
      console.error("Resend email request failed:", response.status, errorText);
      throw new Error("Email delivery failed.");
    }
  };

  try {
    await sendEmail({
      from: env.FROM_EMAIL,
      to: [env.ENQUIRY_TO_EMAIL],
      reply_to: email,
      subject: `Website enquiry: ${subject || service}`,
      html: `
        <h2>New TURTLEHAN website enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    await sendEmail({
      from: env.FROM_EMAIL,
      to: [email],
      subject: "Thank you for contacting TURTLEHAN",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172b3a;max-width:600px">
          <h2>Thank you for contacting TURTLEHAN.</h2>
          <p>Hello ${safeName},</p>
          <p>We have received your enquiry regarding <strong>${safeService}</strong>.</p>
          <p>Our team will review your message and get back to you shortly.</p>
          <p>Best regards,<br /><strong>TURTLEHAN Team</strong></p>
        </div>
      `,
    });

    return json({ success: true });
  } catch {
    return json(
      {
        success: false,
        error:
          "We couldn't send your enquiry right now. Please try again later.",
      },
      502,
    );
  }
};
