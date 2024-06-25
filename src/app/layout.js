import { Inter } from "next/font/google";
//import { Oswald } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavbarComponent from "@/components/navbar/Navbar";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });
// const oswald = Oswald({
//   subsets:["latin"],
//   weight:["300", "400", "500", "700", "600"],
//   variable: "— font-oswald" ,
//   })

export const metadata = {
  title: "Ashwani Exports",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="" href="../static/ashImports-logo.jpeg" type="image/jpeg" sizes="16x16"/>
      </head>
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
