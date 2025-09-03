import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh bg-main-white">
      <Header />
      <main className="flex flex-1 justify-center pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
