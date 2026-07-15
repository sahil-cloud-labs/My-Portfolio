import { Cloud } from "lucide-react";

export default function Experience() {
  const experience = {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Cloud Engineer",
    company: "Infosol Technosol Pvt. Ltd.",
    location: "Bangalore, India (Remote)",
    duration: "Feb 2025 – Present",
    points: [
      "Designed, deployed, and managed cloud infrastructure on AWS using services like EC2, S3, IAM, VPC, CloudFront, Route 53, and RDS.",
      "Built and maintained CI/CD pipelines using GitHub Actions with self-hosted runners to automate application deployments.",
      "Containerized applications using Docker and managed deployments on Amazon ECS with ECR.",
      "Provisioned and managed cloud resources using Terraform, following Infrastructure as Code (IaC) best practices.",
      "Monitored applications and infrastructure using CloudWatch, Prometheus, and Grafana to ensure high availability and performance.",
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Work Experience
      </h2>

      <div className="grid gap-6">
        <div className="flex items-start space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-xl p-5">
          <div className="flex-shrink-0">{experience.icon}</div>

          <div>
            <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
              {experience.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">
              {experience.company} • {experience.location}
            </p>

            <p className="text-gray-500 text-sm mb-2">
              {experience.duration}
            </p>

            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}