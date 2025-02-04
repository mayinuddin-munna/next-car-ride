"use client";
import { SidebarWrapper } from "../../../components/sidebar/userSidebar";
import { NavbarWrapper } from "../../../components/dashboardNavbar/dashboardNavbar";

interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
