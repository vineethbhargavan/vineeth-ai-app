import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import Link from "next/link";

interface CertificationProps {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
}

const Certification = ({ title, issuer, date, description }: CertificationProps) => (
  <div className="border-b pb-4 space-y-2">
    <H2>{title}</H2>
    <div className="flex justify-between items-center">
      <span className="text-primary">{issuer}</span>
      {date && <span className="text-muted-foreground">{date}</span>}
    </div>
    {description && (
      <p className="text-muted-foreground">{description}</p>
    )}
  </div>
);

export default function CertificationsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Link href="/about" className="text-primary hover:underline">
          ← Back to About
        </Link>
        <H1>Certifications & Education</H1>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Professional Certifications</h2>
          <div className="space-y-6">
            <Certification
              title="CKAD (Certified Kubernetes Application Developer)"
              issuer="Linux Foundation"
            />
            <Certification
              title="AWS Certified Developer Associate"
              issuer="Amazon Web Services"
            />
            <Certification
              title="Burp Suite Certified - Apprentice"
              issuer="PortSwigger"
            />
            <Certification
              title="Fundamentals of CyberSecurity"
              issuer="UNSW"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="space-y-6">
            <Certification
              title="Electrical and Electronics"
              issuer="Anna University, Chennai, India"
              date="2005"
            />
            <Certification
              title="Operations Management"
              issuer="Indira Gandhi National Open University, Bangalore, India"
              date="2007"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
