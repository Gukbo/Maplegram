import { Link } from "react-router-dom";
import taxi from "../../assets/taxi.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div>
      <header className="relative inset-x-0 top-0 z-10 bg-main-black text-main-orange border-main-black text-2xl pt-6">
        <div className="flex h-14 max-w-4xl mx-auto items-center justify-between gap-8 px-4 sm:px-6">
          <div className="flex items-center">
            <Link className="" to="/">
              <img className="h-14 w-auto" src={logo} alt="logo img" />
            </Link>
          </div>
          <div className="flex items-center gap-4 max-md:hidden">
            <Link to="/Meso">결정석</Link>
            {/* <Link className="" to="/ZONE">
              캐릭터검색
            </Link> */}
          </div>
          <div className="flex items-center md:hidden">
            <button className="">
              <img className="h-14 w-auto" src={taxi} alt="taxi" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
