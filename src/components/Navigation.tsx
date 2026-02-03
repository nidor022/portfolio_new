export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            이루리
          </a>
          <ul className="flex gap-8">
            <li>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                소개
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                기술
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                프로젝트
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
