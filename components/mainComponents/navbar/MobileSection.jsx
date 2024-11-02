"use client";
import React from "react";
import MobileMenu from "./MobileMenu";
import CustomeCollapse from "./CustomeCollapse";
import { useState, useEffect } from "@/components/imports";

const MobileSection = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <div className="justify-items-end w-full">
      <MobileMenu openNav={openNav} setOpenNav={setOpenNav} />
      <CustomeCollapse openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default MobileSection;
