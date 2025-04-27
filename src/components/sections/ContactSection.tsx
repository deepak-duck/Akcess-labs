import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const ContactSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <section
      id="contact"
      className="flex flex-col w-full items-center justify-center gap-12 px-8 py-12 md:px-20 bg-black"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full max-w-7xl">
        <Card className="w-full md:w-1/2 bg-main-text rounded-md border-none bg-akcess-lime">
          <CardContent className="flex flex-col gap-4 p-8 md:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-black text-2xl leading-8">
                Get in touch
              </h2>
              <p className="font-normal text-black text-base leading-6">
                Have questions about our services? Ready to start making your
                digital presence accessible? Reach out to us today.
              </p>
            </div>
            <Button
              onClick={handleContactUs}
              className="w-fit mt-2 text-akcess-lime hover:text-akcess-lime outline-red-400"
            >
              Contact Us
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-8 mt-8 md:mt-0 md:pl-8">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h3 className="font-bold text-white text-lg">Office</h3>
            <p className="font-text-16 text-white leading-6">
              545, Street 11, Block F<br />
              Dean Boulevard, Ohio
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <h3 className="font-bold text-white text-lg">Contact</h3>
            <div className="flex flex-col gap-1">
              <p className="font-text-16 text-white leading-6">
                +91 302 300 3215
              </p>
              <p className="font-text-16 text-white leading-6">
                info@akscesslabs.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
