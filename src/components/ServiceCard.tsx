import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  standards: string[];
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  standards,
  Icon,
}) => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    // Navigate to contact page with service pre-selected
    navigate("/contact-us", {
      state: {
        service: title,
        message: `I'm interested in learning more about your ${title} services.`,
      },
    });
  };

  return (
    <div className="bg-black border border-white text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 text-akcess-lime">
        <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-100 mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="text-sm mb-6">
        {standards.map((standard, idx) => (
          <p key={idx} className="my-1 text-gray-200">
            {standard}
          </p>
        ))}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-akcess-lime text-black hover:bg-akcess-lime w-full mt-auto"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-akcess-darkgray border-none">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2 text-white">
              <Icon className="text-akcess-lime" size={24} aria-hidden="true" />
              <span>{title}</span>
            </DialogTitle>
            <DialogDescription className="text-md pt-2 text-gray-200">
              Comprehensive information about our {title.toLowerCase()} services
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <h4 className="text-lg font-medium mb-2 text-white">
              Service Overview
            </h4>
            <p className="mb-4 text-gray-100">{description}</p>

            <h4 className="text-lg font-medium mb-2 text-white">
              Standards We Follow
            </h4>
            <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-200">
              {standards.map((standard, idx) => (
                <li key={idx}>{standard}</li>
              ))}
            </ul>

            <h4 className="text-lg font-medium mb-2 text-white">
              Why Choose Us
            </h4>
            <p className="mb-4 text-gray-100">
              Our team of experts has years of experience implementing
              accessibility solutions across various industries. We pride
              ourselves on delivering high-quality, compliant solutions that
              work for everyone.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-600">
              <Button
                onClick={handleContactUs}
                className="bg-akcess-lime text-black hover:bg-akcess-lime focus:ring-2 focus:ring-akcess-lime focus:ring-offset-2 focus:ring-offset-akcess-darkgray"
              >
                Contact Us
                <ArrowRight className="ml-0" size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceCard;
