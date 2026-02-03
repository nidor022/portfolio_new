export default function Skills() {
  const skills = {
    Frontend: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML / CSS', level: 90 },
    ],
    Backend: [
      { name: 'Spring Boot', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'JSP', level: 70 },
    ],
    'Database & Tools': [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Git / SVN', level: 85 },
      { name: 'Linux', level: 70 },
    ],
  };

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          기술 스택
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                {category}
              </h3>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
