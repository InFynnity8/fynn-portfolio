import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


export const metadata = {
  title: "My Portfolio",
  description: "Current Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <StairTransition/>
        <PageTransition>
       {children}
       </PageTransition>
      </body>
    </html>
  );
}
