import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Sidebar | Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      User Sidebar
      {children}
    </div>
  );
}
