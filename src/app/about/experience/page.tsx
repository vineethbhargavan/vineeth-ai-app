// src/app/about/experience/page.tsx
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Link href="/about" className="text-primary hover:underline">
          ← Back to About
        </Link>
        <H1>Professional Experience</H1>
      </div>

      <div className="space-y-12">
        {/* Current Role */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Principal DevOps Engineer</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Netlinkz Ltd, Sydney</span>
              <span className="text-muted-foreground">06/2023 – present</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>DevOps Transformation: Spearheaded a 3-month transformation, accelerating development and deployment with Terraform, Ansible, and Jira-GitLab integration.</li>
            <li>Infrastructure Automation: Leveraged Terraform Cloud and HashiCorp Vault for secret management; automated API testing within CI/CD pipelines.</li>
            <li>Code Review Best Practices: Implemented forking workflows and multi-layer approval processes.</li>
            <li>Pipeline Enhancements: Integrated API testing (Newman) and stress testing validation.</li>
            <li>Kubernetes Orchestration: Transitioned to Kubernetes with Helm and ArgoCD.</li>
            <li>Authentication & Authorization: Enhanced security with Keycloak across multiple platforms.</li>
          </ul>
        </div>

        {/* Transport For NSW */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Senior Cloud Engineer</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Transport For NSW, Sydney</span>
              <span className="text-muted-foreground">01/2022 – 06/2023</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>IoT Platform Evaluation: Prototyped solutions using AWS and Azure for transport projects.</li>
            <li>Infrastructure Deployment Framework: Developed structured IAC framework with Terraform, Packer, and Ansible.</li>
            <li>Web Application Transition: Migrated .NET/React file transfer PoC to Azure App Service.</li>
            <li>Automated ETL Solution: Designed near 100% automated pipeline with Azure Data Factory.</li>
            <li>Cost Optimization: Implemented AWS Lambda schedulers for non-production workloads.</li>
          </ul>
        </div>

        {/* Digital Experience Labs */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Senior Cloud Engineer (DevOps) and Tech Lead</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Digital Experience Labs, Sydney</span>
              <span className="text-muted-foreground">05/2020 – 01/2022</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Platform Evaluation: Assessed AWS and Microsoft solutions for customer offerings.</li>
            <li>Infrastructure Management: Managed infrastructure with AWS Control Tower and CloudFormation.</li>
            <li>Secure Networking: Set up interconnections using AWS PrivateLink, Transit Gateway, and VPC Peering.</li>
            <li>Authentication: Utilized AWS Cognito for OAuth-based authentication.</li>
            <li>Full-Stack Development: Built a React application using AWS Amplify and associated services.</li>
          </ul>
        </div>

        {/* Jet Interactive */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Cloud Telephony Solutions Engineer</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Jet Interactive, Sydney</span>
              <span className="text-muted-foreground">03/2017 – 05/2020</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Telephony Platform: Built scalable platform on AWS using Asterisk, handling 300+ calls/hour.</li>
            <li>Microservices Implementation: Developed containerized microservices with Java, Node.js, and AWS Lambda.</li>
            <li>Call Flow Builder: Created configurable builder using Joint.js and Vue.js.</li>
            <li>WebRTC Soft Client: Developed secure client with AWS Amplify and Auth0.</li>
            <li>Salesforce App Exchange: Led development and publishing of managed package.</li>
          </ul>
        </div>

        {/* Powercom Interactive Media */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Telephony Solutions Specialist</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Powercom Interactive Media, Sydney</span>
              <span className="text-muted-foreground">11/2015 – 03/2017</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Telephony Platform Migration: Migrated system from Dialogic to Asterisk 11.</li>
            <li>Real-Time Call Dashboard: Developed dashboard using Sails.js and Angular.js.</li>
            <li>Monitoring & Alerts: Implemented Node.js-based monitoring system.</li>
            <li>Agile Practices: Introduced Agile methodologies and JIRA for tracking.</li>
          </ul>
        </div>

        {/* Intelliverse Telecom */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Technical Manager</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Intelliverse Telecom, Bangalore</span>
              <span className="text-muted-foreground">12/2013 – 09/2015</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Leadership: Led team of 8 engineers as Technical Manager.</li>
            <li>Salesforce CTI Development: Built inbound call blast functionality using Node.js and Force.com.</li>
            <li>Performance Optimization: Reduced customer complaints by ~40% through system optimization.</li>
            <li>Scrum Team Success: Led team showcase at Microsoft Convergence Conference 2015.</li>
          </ul>
        </div>

        {/* Siemens LTD */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Team Leader</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Siemens LTD, Chennai, Sydney, Munich</span>
              <span className="text-muted-foreground">12/2010 – 11/2013</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Technical Expertise: Full-stack development using Java, TETRA, SIP Protocol.</li>
            <li>Leadership: Managed teams, conducted training, and acted as Scrum Master.</li>
            <li>Best Practices: Implemented SOLID principles and Spring framework.</li>
          </ul>
        </div>

        {/* Wipro */}
        <div className="space-y-4">
          <div className="border-b pb-2">
            <H2>Analyst Programmer</H2>
            <div className="flex justify-between items-center">
              <span className="text-primary">Wipro, India, Morocco</span>
              <span className="text-muted-foreground">10/2005 – 12/2010</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Technical Expertise: Gained exposure to Java, C++, and VOIP protocol.</li>
            <li>Professional Skills: Acquired experience in IT processes and cross-cultural customer handling.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}