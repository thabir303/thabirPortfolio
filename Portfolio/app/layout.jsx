import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weights: ["100", "200", "300", "400", "500", "600", "700", "800"], 
variable: "--font-jetbrainsMono", });

export const metadata = {
  title: "Abir | Portfolio",
  description: "Hello I'm Tanvir Hasan Abir I excel at crafting elegant digital experiences and I am proficient in various programming languages and frameworks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition> {children} </PageTransition>
        </body>
    </html>
  );
}
