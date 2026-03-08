export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto flex min-h-screen items-center px-4">
        <div className="w-full text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-900">이루리</h1>
          <p className="mb-6 text-2xl text-gray-700">Web Developer & Frontend Engineer</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            경력 2년 8개월의 신사업 프로젝트 개발 경험과 프론트엔드 부트캠프 교육을 통해
            <br />
            사용자 중심의 웹 애플리케이션을 개발합니다.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              프로젝트 보기
            </a>
            <a
              href="https://github.com/nidor022"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
