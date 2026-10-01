export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 px-4 lg:px-6">
      <h2 id="about-heading" className="mb-6 font-display text-2xl font-semibold text-secondary">
        About
      </h2>
      <div className="space-y-4 text-left leading-relaxed">
        <p>
          I&apos;m Keith, a full-stack developer with 3+ years of experience
          building business applications with .NET, Angular, Next.js, SQL Server,
          and PostgreSQL.
        </p>
        <p>
          My work spans an HR system supporting 900+ eligible employees, a booking
          platform with 300+ registered users, and data workflows across 50+ cash
          register terminals. For client projects, I handle discovery and
          requirements through implementation, deployment, and ongoing support.
        </p>
        <p>
          I also build backend tools for production AI voice agents, connecting
          customer calls to pricing logic and dispatcher workflows. I&apos;m
          looking for remote full-stack roles, including opportunities to build
          AI-powered business applications.
        </p>
      </div>
    </section>
  );
}
