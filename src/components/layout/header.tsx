"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["#services", "Our Services"],
  ["#clients", "Our Clients"],
  ["#team", "Our Team"],
] as const;

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

export function Header() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button button-small desktop-cta">
          Get in touch <ArrowRight size={17} aria-hidden="true" />
        </a>
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
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
            <a href="#contact" className="button" onClick={() => setOpen(false)}>
              Start a conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
