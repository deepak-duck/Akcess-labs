
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Shield, Code, BookOpen, BarChart, GraduationCap, Brush } from 'lucide-react';

const ServicesSection = () => {
  // Services data
  const services = [
    {
      title: "Accessibility Testing",
      description: "Comprehensive accessibility audit and testing service that evaluates accessibility and compliance level of your digital solutions to ensure they meet all required standards.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: Shield
    },
    {
      title: "Accessibility Training",
      description: "Comprehensive accessibility education for your development and design teams to build accessible products from the ground up to ensure lasting compliance.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: GraduationCap
    },
    {
      title: "Remediation Services",
      description: "Expert remediation services to fix accessibility issues in your existing digital products and platforms, bringing them up to compliance standards quickly.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: Code
    },
    {
      title: "Ongoing Support",
      description: "Continuous accessibility monitoring and support to ensure your digital properties remain compliant as they evolve and grow over time.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: BarChart
    },
    {
      title: "Legal Compliance",
      description: "Navigate complex accessibility laws and regulations with our expert guidance and compliance services to protect your organization.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: BookOpen
    },
    {
      title: "Accessible Design",
      description: "Create beautiful, inclusive designs that work for everyone without sacrificing aesthetics or functionality, ensuring a seamless user experience.",
      standards: [
        "Expertise in WCAG 2.0, WCAG 2.1, WCAG 2.2",
        "Section 508, ADA, BITV, RGAA, EN 301 549, EAA"
      ],
      icon: Brush
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our comprehensive accessibility solutions ensure your digital presence is inclusive and compliant
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              standards={service.standards}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
