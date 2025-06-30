// src/layouts/Layout.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
        <main>
            {children}
        </main>
      <Footer />
    </div>
  );
}