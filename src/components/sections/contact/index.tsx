"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  Copy,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { services } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string(),
  service: z.string().min(1, "Please select a service."),
  subject: z.string(),
  message: z.string().trim().min(1, "Please tell us how we can help."),
  // Hidden honeypot field used to reject basic automated spam submissions.
  website: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copiedContact, setCopiedContact] = useState("");
  const [copyError, setCopyError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  // Service-specific links use /contact?service=<service-slug>.
  // Read the query on the client so this remains compatible with static export.
  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get(
      "service",
    );
    if (
      requestedService &&
      services.some((service) => service.slug === requestedService)
    ) {
      setValue("service", requestedService, { shouldValidate: true });
    }
  }, [setValue]);

  const onSubmit = async (values: ContactValues) => {
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error || "We couldn't send your enquiry. Please try again.",
        );
      }

      // Keep the selected service after a successful submission for convenience.
      const selectedService = getValues("service");
      reset({
        name: "",
        email: "",
        phone: "",
        service: selectedService,
        subject: "",
        message: "",
        website: "",
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again in a moment.",
      );
    }
  };

  const copyContact = async (value: string, label: string) => {
    setCopyError("");
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(label);
    } catch {
      setCopiedContact("");
      setCopyError(`Couldn't copy the ${label}. Please copy it manually.`);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-details">
          <div className="section-heading">
            <span className="eyebrow">
              <i />
              Start a conversation
            </span>
            <h2>
              Let&apos;s build something
              <br />
              <em>together.</em>
            </h2>
          </div>
          <p>
            Tell us where you want to go. We&apos;ll bring the right
            perspective, people and commitment to the conversation.
          </p>
          <div className="contact-list">
            <div>
              <Mail />
              <span>
                <small>Email</small>
                <span className="contact-value-row">
                  <a
                    className="contact-link"
                    href="https://mail.google.com/mail/?view=cm&to=haneesulrahman%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    haneesulrahman@gmail.com
                  </a>
                  <button
                    className="contact-copy-button"
                    type="button"
                    onClick={() =>
                      copyContact("haneesulrahman@gmail.com", "email")
                    }
                    aria-label="Copy email address"
                    title={
                      copiedContact === "email" ? "Email copied" : "Copy email"
                    }
                  >
                    {copiedContact === "email" ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                  </button>
                </span>
              </span>
            </div>
            <div>
              <Phone />
              <span className="contact-phone-actions">
                <small>Phone / WhatsApp</small>
                <span className="contact-value-row">
                  <b>+917356820126</b>
                  <button
                    className="contact-copy-button"
                    type="button"
                    onClick={() => copyContact("+917356820126", "phone number")}
                    aria-label="Copy phone number"
                    title={
                      copiedContact === "phone number"
                        ? "Phone number copied"
                        : "Copy phone number"
                    }
                  >
                    {copiedContact === "phone number" ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                  </button>
                </span>
                <div className="contact-phone-options" aria-label="Choose how to contact us">
                  <a href="tel:+917356820126">Call</a>
                  <a
                    href="https://wa.me/917356820126"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </span>
            </div>
            <div>
              <MapPin />
              <span>
                <small>Locations</small>
                <b>India · United Arab Emirates</b>
              </span>
            </div>
          </div>
          {copyError && (
            <p className="contact-copy-error" role="alert">
              {copyError}
            </p>
          )}
          <div className="social-row">
            <span>Follow TURTLEHAN</span>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="form-heading">
            <span>Business enquiry</span>
            <p>Fields marked * are required</p>
          </div>

          {/* Honeypot: real visitors should leave this field empty. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
            }}
          >
            <label>
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </label>
          </div>

          <div className="form-grid">
            <Field label="Full Name *" error={errors.name?.message}>
              <Input autoComplete="name" {...register("name")} />
            </Field>
            <Field label="Email Address *" error={errors.email?.message}>
              <Input type="email" autoComplete="email" {...register("email")} />
            </Field>
            <Field label="Phone Number">
              <Input type="tel" autoComplete="tel" {...register("phone")} />
            </Field>
            <label className={errors.service ? "has-error" : ""}>
              <span>Service Interested In *</span>
              <select {...register("service")}>
                <option value="" disabled>
                  Select a division
                </option>
                {services.map((service) => (
                  <option value={service.slug} key={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && <small>{errors.service.message}</small>}
            </label>
            <Field label="Subject" full>
              <Input {...register("subject")} />
            </Field>
            <Field label="Message *" full error={errors.message?.message}>
              <Textarea
                rows={5}
                placeholder="Tell us a little about your enquiry"
                {...register("message")}
              />
            </Field>
          </div>

          {submitted && (
            <div className="form-status success" role="status">
              <Check size={18} /> Thank you for contacting TURTLEHAN. Your
              enquiry has been received. We&apos;ll get back to you shortly.
            </div>
          )}
          {submitError && (
            <div className="form-status error" role="alert">
              {submitError}
            </div>
          )}
          {Object.keys(errors).length > 0 && (
            <div className="form-status error" role="alert">
              Please review the highlighted fields and try again.
            </div>
          )}
          <Button variant="gold" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send enquiry"}{" "}
            <span aria-hidden="true">→</span>
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`${full ? "full" : ""} ${error ? "has-error" : ""}`}>
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  );
}
