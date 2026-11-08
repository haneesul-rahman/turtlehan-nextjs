import type { Metadata } from "next";

import { ServicesPage } from "@/components/site/pages";

export const metadata: Metadata = { title: "Our Services" };

export default function Page() {
  return <ServicesPage />;
}
