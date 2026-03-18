import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Ugorji — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in TypeScript, React, and Node.js. Building high-performance web applications.",
  keywords: [
    "Full Stack Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Nigeria",
    "Software Engineer",
  ],
  authors: [{ name: "Michael Ugorji" }],
  openGraph: {
    title: "Michael Ugorji — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in TypeScript, React, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
