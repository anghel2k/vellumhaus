import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vellumhaus.studio"),
  title: "vellumhaus",
  description: "AI-hybrid post-production by Anghel Robert. Keyframes, retouch, compositing and final film.",
  icons: { icon: "/brand/vh_favicon.svg", shortcut: "/brand/vh_favicon.svg" },
  openGraph: {
    title: "vellumhaus",
    description: "AI-hybrid post-production by Anghel Robert. Keyframes, retouch, compositing and final film.",
    url: "https://vellumhaus.studio",
    siteName: "vellumhaus",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "vellumhaus — AI-hybrid post-production" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "vellumhaus",
    description: "AI-hybrid post-production by Anghel Robert.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.addEventListener("error",function(event){if(event.message==="Script error."&&!event.error&&!event.filename){event.preventDefault();event.stopImmediatePropagation();}},true);` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
