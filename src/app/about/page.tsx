import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Senior DevOps Engineer with expertise in cloud infrastructure and automation",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      
      <section className="space-y-4">
        <H2>Professional Summary</H2>
        <p className="text-muted-foreground">
          Principal DevOps Engineer with over 15 years of experience in software development, 
          cloud infrastructure, and DevOps practices. Specialized in AWS, Azure, and modern 
          DevOps tools with a strong focus on automation and infrastructure as code.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Link 
          href="/about/experience" 
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">Professional Experience</h3>
          <p className="text-sm text-muted-foreground">
            From Principal DevOps Engineer at Netlinkz to roles at Transport For NSW, 
            Digital Experience Labs, and more
          </p>
        </Link>

        <Link 
          href="/about/skills" 
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">Technical Skills</h3>
          <p className="text-sm text-muted-foreground">
            DevOps, Cloud (AWS/Azure), IaC, CI/CD, Kubernetes, and Full-Stack Development
          </p>
        </Link>

        <Link 
          href="/about/certifications" 
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">Certifications & Education</h3>
          <p className="text-sm text-muted-foreground">
            AWS, CKAD, Burp Suite certifications and academic qualifications
          </p>
        </Link>

        <Link 
          href="/about/projects" 
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">Personal Projects</h3>
          <p className="text-sm text-muted-foreground">
            Full-stack applications including catering website and AI chatbot
          </p>
        </Link>

        <Link 
          href="/about/achievements" 
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">Achievements & Awards</h3>
          <p className="text-sm text-muted-foreground">
            Outstanding Work Awards and successful project deliveries
          </p>
        </Link>

        <a 
          href="https://github.com/vineethbhargavan" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="font-semibold mb-2">GitHub Profile</h3>
          <p className="text-sm text-muted-foreground">
            View my open source contributions and projects
          </p>
        </a>
      </section>
    </section>
  );
}
