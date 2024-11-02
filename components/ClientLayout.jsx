"use client";
import { ThemeProvider } from "@/clientSide";
import HomeNav from "./mainComponents/navbar/HomeNav";


const ClientLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <HomeNav />
      {children}
    </ThemeProvider>
  );
};

export default ClientLayout;
