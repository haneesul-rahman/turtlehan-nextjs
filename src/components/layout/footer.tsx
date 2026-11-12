"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { navigationLinks, services } from "@/data/site";

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="9" width="4" height="11" />
        <path d="M6 4v.1M12 20v-6c0-3 6-4 6 0v6M12 9v11" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    quote: (
      <path d="M7 17H4c0-6 2-9 6-10v3c-2 1-3 2-3 4h3v3H7Zm10 0h-3c0-6 2-9 6-10v3c-2 1-3 2-3 4h3v3h-3Z" />
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`logo ${light ? "logo-light" : ""}`}
      aria-label="Scroll to the TURTLEHAN introduction"
    >
      <Image
        className="logo-emblem"
        src="/images/turtlehan-logo-transparent.webp"
        alt=""
        width={935}
        height={730}
        priority
      />
      <span className="logo-divider" aria-hidden="true" />
      <span className="logo-display-name">TURTLEHAN</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Integrated business solutions with a human point of view, serving
            organisations and communities across India and the UAE.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
          </div>
        </div>
        <div>
          <h4>Navigate</h4>
          {navigationLinks.map(({ href, label }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <h4>Divisions</h4>
          {services.map((s) => (
            <a href="#services" key={s.slug}>
              {s.title}
            </a>
          ))}
        </div>
        <div>
          <h4>Presence</h4>
          <p>India</p>
          <p>United Arab Emirates</p>
          <h4 className="footer-contact-title">Enquiries</h4>
          <a href="#contact">
            Contact our team <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} TURTLEHAN. All rights reserved.
        </span>
        <span>India · UAE</span>
      </div>
    </footer>
  );
}
