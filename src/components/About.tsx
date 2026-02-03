export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="about-item container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">소개</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">교육</h3>
            <ul className="space-y-2 text-gray-600">
              <li>방송통신대학 컴퓨터과학과 3학년 재학중</li>
              <li>프론트엔드 부트캠프 (2025년 이수)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">경력</h3>
            <ul className="space-y-2 text-gray-600">
              <li>(주)엔에스데블 신사업 개발부서 주임</li>
              <li>2022년 1월 - 2024년 8월 (2년 8개월)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">전문성</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Frontend: React, Next.js, Vue.js</li>
              <li>Backend: Java Spring, SpringBoot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
