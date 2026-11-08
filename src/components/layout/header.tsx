"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Our Services"],
  ["/team", "Our Team"],
  ["/csr", "CSR"],
  ["/contact", "Contact"],
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="Turtlehan home">
      <span className="logo-mark">
        <span>T</span>
      </span>
      <span className="logo-word">
        <b>TURTLEHAN</b>
        <small>INDIA · UAE</small>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href || (href === "/services" && pathname.startsWith("/services/"))
                  ? "active"
                  : ""
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small desktop-cta">
          Get in touch <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu open"
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
            <Link href="/contact" className="button" onClick={() => setOpen(false)}>
              Start a conversation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
