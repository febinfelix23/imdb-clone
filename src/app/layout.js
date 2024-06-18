import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sortbar from "@/components/Sortbar";

const font = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb-Clone",
  description: "This is a movie database clone",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
          <Navbar />
          <Sortbar/>
          {children}
      </body>
    </html>
  );
}
