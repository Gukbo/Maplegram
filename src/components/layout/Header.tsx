import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="relative inset-x-0 top-0 z-10 bg-main-white text-main-orange border-main-black text-2xl">
        <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link className="" to="/">
              Maplegram
            </Link>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
            <Link to="/Meso">결정석</Link>
          </div>
          <div className="flex items-center gap-25 md:hidden">
            <button className="">☰</button>
          </div>
        </div>
      </header>
    </div>
  );
}
