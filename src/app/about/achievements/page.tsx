import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Link from "next/link";

interface AchievementProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

const Achievement = ({ title, company, date, description }: AchievementProps) => (
  <div className="border-b pb-6 space-y-3">
    <div className="space-y-1">
      <H2>{title}</H2>
      <div className="flex justify-between items-center">
        <span className="text-primary">{company}</span>
        <span className="text-muted-foreground">{date}</span>
      </div>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function AchievementsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Link href="/about" className="text-primary hover:underline">
          ← Back to About
        </Link>
        <H1>Achievements & Awards</H1>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Key Achievements</h2>
          <div className="space-y-8">
            <Achievement
              title="DevOps Transformation"
              company="Netlinkz"
              date="2023"
              description="Led a multiphased DevOps transformation in a short span of time, implementing modern practices and tools to significantly improve development workflow and deployment efficiency."
            />
            
            <Achievement
              title="Infrastructure Reference Framework"
              company="Transport for NSW"
              date="2022"
              description="Pioneered the successful design of Infrastructure as Code and automation framework, delivering a scalable solution in a compressed timeframe."
            />

            <Achievement
              title="Legacy Application Transformation"
              company="Digital Experience Labs"
              date="2021"
              description="Received Outstanding Achievement Award for successfully modernizing legacy applications and implementing cloud-native solutions."
            />

            <Achievement
              title="Complete Product Lifecycle Management"
              company="Siemens"
              date="2013"
              description="Demonstrated technical leadership in guiding a product through its complete lifecycle from inception to commission, earning the Outstanding Performance Award."
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Awards & Recognition</h2>
          <div className="space-y-8">
            <Achievement
              title="Elevate Outstanding Work Award"
              company="Digital Experience Labs"
              date="2021"
              description="Recognized for exceptional contributions to cloud infrastructure and DevOps practices."
            />

            <Achievement
              title="Siemens Puraskhar Award"
              company="Siemens"
              date="2013"
              description="Awarded for Outstanding Performance in product development and team leadership."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
