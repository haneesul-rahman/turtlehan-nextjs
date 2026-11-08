import type { Metadata } from "next";

import { TeamPage } from "@/components/site/pages";

export const metadata: Metadata = { title: "Our Team" };

export default function Page() {
  return <TeamPage />;
}
