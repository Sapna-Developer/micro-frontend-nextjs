import '../assets/styles/main.scss';

import React, { Suspense, useState } from "react";
import Link from 'next/link';
import SubNav from "./subnav";

interface LayoutProps {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <i className="fa-solid fa-sitemap fa-lg mr-2"></i>
        <Link href="/" className="navbar-brand">Micro Frontend Architecture using NextJs</Link>
      </nav>
      <SubNav />
      <div className="container mt-4">{children}</div>
      <div className="text-center text-muted">
       Welcome to demo project!
      </div>
    </>
  );
};

export default Layout;