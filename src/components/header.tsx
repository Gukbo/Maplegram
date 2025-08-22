export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* 로고 */}
        <div className="text-2xl font-bold text-blue-600">MyMaple</div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#boss" className="hover:text-blue-500">
            보스 계산기
          </a>
          <a href="#market" className="hover:text-blue-500">
            시세
          </a>
          <a href="#about" className="hover:text-blue-500">
            소개
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button className="md:hidden p-2 rounded hover:bg-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
