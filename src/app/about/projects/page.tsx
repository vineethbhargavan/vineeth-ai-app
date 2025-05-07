import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}

const Project = ({ title, description, technologies, url }: ProjectProps) => (
  <div className="border rounded-lg p-6 space-y-4">
    <div className="space-y-2">
      <H2>{title}</H2>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold">Technologies Used:</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {url && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-block mt-2"
      >
        Visit Project →
      </a>
    )}
  </div>
);

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Link href="/about" className="text-primary hover:underline">
          ← Back to About
        </Link>
        <H1>Personal Projects</H1>
      </div>

      <div className="grid gap-6">
        <Project
          title="Catering Website"
          description="Developed a Vue.js-based web application hosted on AWS Amplify, leveraging DynamoDB, AWS SES, S3, and CodeCommit. Incorporated a headless content management system (Prismic) with SSL support using AWS Certificate Manager."
          technologies={[
            "Vue.js",
            "AWS Amplify",
            "DynamoDB",
            "AWS SES",
            "S3",
            "CodeCommit",
            "Prismic CMS",
            "SSL/TLS"
          ]}
          url="https://sadias.com.au"
        />

        <Project
          title="AI Chatbot for Content Management"
          description="Building a full-stack project utilizing React, Next.js, Pinecone, and LangChain, integrated with Clerk for authentication. Work in progress focused on intelligent content management and interaction. Reference: codinginflow.com"
          technologies={[
            "React",
            "Next.js",
            "Pinecone",
            "LangChain",
            "Clerk",
            "TypeScript"
          ]}
          url="https://vineethbhargavan.com"
        />
      </div>
    </section>
  );
}
