import type { Metadata } from "next";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ethan Proctor — digital and brand designer based in London. Available for brand identity and logo design projects and design roles.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
