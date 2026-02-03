export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">이루리</h3>
            <p className="text-gray-400">Web Developer & Frontend Engineer</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">링크</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/nidor022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 이루리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
