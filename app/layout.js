import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Grupverse Clone",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="w-screeen h-screen pt-[90px]">{children}</div>
        <div className="hiddenInDesktop">
          <MobileNavbar />
        </div>
      </body>
    </html>
  );
}
