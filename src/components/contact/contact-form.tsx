"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
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
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", subject: "", message: "" },
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <section className="section container contact-layout" id="contact">
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
          Tell us where you want to go. We&apos;ll bring the right perspective, people and
          commitment to the conversation.
        </p>
        <div className="contact-list">
          <div>
            <Mail />
            <span>
              <small>Email</small>
              <b>Official email to be confirmed</b>
            </span>
          </div>
          <div>
            <Phone />
            <span>
              <small>Phone / WhatsApp</small>
              <b>Official number to be confirmed</b>
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
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-heading">
          <span>Business enquiry</span>
          <p>Fields marked * are required</p>
        </div>
        <div className="form-grid">
          <Field label="Full Name *" error={errors.name?.message}>
            <Input {...register("name")} />
          </Field>
          <Field label="Email Address *" error={errors.email?.message}>
            <Input type="email" {...register("email")} />
          </Field>
          <Field label="Phone Number">
            <Input type="tel" {...register("phone")} />
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
            <Check size={18} /> Thank you. Your enquiry has been prepared successfully. Connect this
            form to your preferred form service before launch.
          </div>
        )}
        {Object.keys(errors).length > 0 && (
          <div className="form-status error" role="alert">
            Please review the highlighted fields and try again.
          </div>
        )}
        <Button variant="gold" type="submit" disabled={isSubmitting}>
          Send enquiry <span aria-hidden="true">→</span>
        </Button>
      </form>
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
