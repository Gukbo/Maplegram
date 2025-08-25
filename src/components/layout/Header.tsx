import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-amber-50 shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link to="/">로고</Link>
          </div>
          <nav>
            <Link to="/Meso">결정석</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
