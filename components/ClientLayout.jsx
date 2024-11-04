"use client";
import { ThemeProvider } from "@material-tailwind/react";
import HomeNav from "./mainComponents/navbar/HomeNav";

const ClientLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <HomeNav />
        {children}
      </ThemeProvider>
    </>
  );
};

export default ClientLayout;
