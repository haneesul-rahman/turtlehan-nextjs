import type { Metadata } from "next";

import { AboutPage } from "@/components/site/pages";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return <AboutPage />;
}
