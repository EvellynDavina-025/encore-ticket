import "./globals.css";
import Providers from "./providers";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Encore Ticket",
  description: "Premium Concert Ticketing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Providers>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

        </Providers>
      </body>
    </html>
  );
}