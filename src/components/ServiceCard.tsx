import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

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

  const handleLearnMore = () => {
    // Navigate to contact page with service pre-selected
    navigate("/contact-us", {
      state: {
        service: title,
        message: `I'm interested in learning more about your ${title} services.`,
      },
    });
  };

  return (
    <div className="bg-akcess-darkgray text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 text-akcess-lime">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="text-sm mb-6">
        {standards.map((standard, idx) => (
          <p key={idx} className="my-1 text-gray-400">
            {standard}
          </p>
        ))}
      </div>
      <Button
        className="bg-akcess-lime hover:bg-akcess-lime text-akcess-black px-6 py-3 rounded-md font-semibold 
     w-full mt-auto"
        onClick={handleLearnMore}
      >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
