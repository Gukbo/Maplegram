import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex items-center flex-1 justify-center pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
