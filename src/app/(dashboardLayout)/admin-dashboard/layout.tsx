import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Sidebar | Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Admin Sidebar
      {children}
    </div>
  );
}
