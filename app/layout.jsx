import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Prompttopia",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
