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
        {children}
      </body>
    </html>
  );
}
