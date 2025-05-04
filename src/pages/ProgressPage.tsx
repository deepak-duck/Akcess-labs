import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UnderDevelopment: React.FC = () => {
  const navigate = useNavigate();

  return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-black">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Under <span className="text-akcess-lime">Development</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We're working hard to bring you something amazing. This page is currently under construction.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-akcess-lime text-akcess-black hover:bg-akcess-lime"
          >
            Return Home
          </Button>
        </div>
      </section>
  );
};

export default UnderDevelopment;