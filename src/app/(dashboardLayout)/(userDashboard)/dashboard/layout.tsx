import type { Metadata } from "next";
import { UserLayout } from "./layout/userLayout";

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
      <UserLayout>{children}</UserLayout>
    </div>
  );
}
