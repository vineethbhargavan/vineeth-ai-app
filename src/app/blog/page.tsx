import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Blogs",
  description: "Collection of technical blogs and articles.",
};

interface BlogEntry {
  title: string;
  slug: string;
  description: string;
  date: string;
}

const blogEntries: BlogEntry[] = [
  {
    title: "Evolution of a Legacy Solution: From VMs to Kubernetes",
    slug: "evolution-legacy-solution-vms-kubernetes",
    description: "A deep dive into modernizing a legacy SD-WAN solution using Kubernetes, GitOps, and modern DevOps practices. Explores the journey from traditional VM deployments to a fully containerized, automated infrastructure with enhanced security and monitoring.",
    date: "2024-01-15"
  },
  {
    title: "GitOps -Terraform-Vault-Serverless",
    slug: "gitops-terraform-vault-serverless",
    description: "A light weight demonstration of how to use Git as the single source of truth to build AWS infrastructure. Features implementation of secure credential management with HashiCorp Vault and serverless architecture using AWS Lambda.",
    date: "2023-12-18"
  },
  {
    title: "Streamlining a Legacy Solution: A DevOps Approach",
    slug: "streamlining-legacy-solution-devops-approach",
    description: "An exploration of modernizing legacy systems through DevOps practices. Details the journey from initial analysis through tactical and strategic solutions, with practical implementations and architectural considerations.",
    date: "2023-12-02"
  }
];

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>My Blogs</H1>
      <section className="space-y-3">
        <H2>Technical Articles</H2>
        <p className="text-muted-foreground">
          Here are some of my technical articles where I share my knowledge and
          experiences in software development and DevOps practices.
        </p>
      </section>

      <section className="space-y-4">
        {blogEntries.map((blog, index) => (
          <article key={index} className="border-b border-muted pb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <Link 
                href={`/blog/${blog.slug}`} 
                className="text-primary hover:underline"
              >
                {blog.title}
              </Link>
            </h3>
            <p className="text-muted-foreground">
              {blog.description}
            </p>
          </article>
        ))}
      </section>
    </section>
  );
}