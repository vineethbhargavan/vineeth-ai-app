import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Link from "next/link";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="space-y-3">
    <H2>{title}</H2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  const skillCategories = {
    cloud: [
      "AWS", "Azure", "AWS Control Tower", "CloudFormation", "AWS Amplify",
      "Lambda", "API Gateway", "DynamoDB", "RDS", "S3", "CloudWatch",
      "Azure App Service", "Azure Data Factory", "Azure AD"
    ],
    devops: [
      "Terraform", "Ansible", "Docker", "Kubernetes", "Helm", "ArgoCD",
      "GitLab CI/CD", "Azure DevOps", "HashiCorp Vault",
      "Infrastructure as Code", "CI/CD Pipelines"
    ],
    security: [
      "Keycloak", "OAuth", "SAML", "AWS Cognito", "Azure AD",
      "VPC", "PrivateLink", "Transit Gateway", "VPN", "IPSec"
    ],
    development: [
      "Java", "Node.js", "Python", "React", "Vue.js", "Next.js",
      "TypeScript", "JavaScript", "Spring Framework", "REST APIs",
      "Microservices", "Serverless"
    ],
    databases: [
      "DynamoDB", "RDS", "CosmosDB", "SQL", "NoSQL", "PostgreSQL",
      "MongoDB"
    ],
    tools: [
      "Git", "JIRA", "Confluence", "Prometheus", "Grafana", "Netdata",
      "Newman", "Postman", "Burp Suite"
    ],
    methodologies: [
      "Agile", "Scrum", "DevOps", "GitOps", "Infrastructure as Code",
      "Microservices Architecture"
    ]
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Link href="/about" className="text-primary hover:underline">
          ← Back to About
        </Link>
        <H1>Technical Skills</H1>
      </div>

      <p className="text-muted-foreground">
        Comprehensive technical expertise across cloud platforms, DevOps practices, 
        and modern development technologies.
      </p>

      <div className="space-y-8">
        <SkillCategory title="Cloud Platforms & Services" skills={skillCategories.cloud} />
        <SkillCategory title="DevOps & Infrastructure" skills={skillCategories.devops} />
        <SkillCategory title="Security & Networking" skills={skillCategories.security} />
        <SkillCategory title="Development & Programming" skills={skillCategories.development} />
        <SkillCategory title="Databases & Storage" skills={skillCategories.databases} />
        <SkillCategory title="Tools & Platforms" skills={skillCategories.tools} />
        <SkillCategory title="Methodologies & Practices" skills={skillCategories.methodologies} />
      </div>
    </section>
  );
}
