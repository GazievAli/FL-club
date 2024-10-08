import { components } from "./server/data/data";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import "./styles/globals.css";

export const metadata = {
  title: "Football",
  description: "Project for Hokaton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/icons/main_icon.ico" />
      </head>
      <body>
        <Header header={components.header} />
        {children}
      </body>
    </html>
  );
}
