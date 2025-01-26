import "./globals.css";
import type { Metadata } from "next";
import Providers from "./lib/Providers";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <div className="mx-auto container">{children}</div>
        </Providers>
        Footer
      </body>
    </html>
  );
}
