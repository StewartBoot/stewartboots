import type { Metadata } from "next";
import { Playfair_Display, Roboto, Rye } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const customFont = Rye({
  variable: '--font-custom',
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: "normal",
  display: "auto"
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});


export const metadata: Metadata = {
  title: "Stewart Boots",
  description: "Generated by create next app",
};
export default async function RootLayout({children}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${customFont.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
