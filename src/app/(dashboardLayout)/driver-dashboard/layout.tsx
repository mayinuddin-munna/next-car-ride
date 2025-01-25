import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver Sidebar | Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function driverDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Driver Sidebar
      {children}
    </div>
  );
}
