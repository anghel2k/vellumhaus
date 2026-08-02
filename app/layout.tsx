import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "vellumhaus",
  description: "AI-hybrid post-production by Anghel Robert. Keyframes, retouch, compositing and final film.",
  icons: { icon: "/brand/vh_favicon.svg", shortcut: "/brand/vh_favicon.svg" },
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
