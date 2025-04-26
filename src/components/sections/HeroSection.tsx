import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contact-us");
  };
  const handleConsultation = () => {
    window.open("/contact-us", "_blank");
  };

  useEffect(() => {
    const skipLink = document.querySelector(".skiptomain");
    const demoButton = document.querySelector("#demobutton");

    const handleSkip = (e) => {
      e.preventDefault();
      demoButton.focus();
    };

    skipLink.addEventListener("click", handleSkip);

    return () => {
      skipLink.removeEventListener("click", handleSkip);
    };
  }, []);

  return (
    <section
      id="home"
      className="py-32 md:py-40 relative overflow-hidden bg-black"
    >
      <div className=" px-6 relative z-10">
        <div className="text-center">
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-akcess-lime">Everyone</span> Should Be Able To{" "}
            <span className="text-akcess-lime">Enjoy</span>
            <br className="hidden md:block" />
            Your <span className="text-akcess-lime">Website</span>
          </h1> */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8">
            <span className="text-akcess-lime">Everyone</span> Should Be Able To
            <span className="text-akcess-lime"> Enjoy</span> <br /> Your
            <span className="text-akcess-lime"> Website</span>, Regardless Of
            Ability!
          </h1>
          {/* Everyone  should be able to enjoy  your website , regardless of ability!
By streamlining accessibility, accessiBe's solutions empower businesses to take the inclusive approach to comply with the ADA & adhere to WCAG.
Request a Demo
Schedule a Consultation */}
          <p className="text-2xl mx-auto text-gray-200 mb-12 leading-relaxed">
            By Streamlining Accessibility, Our Solutions Empower Businesses to
            Take The <br /> Inclusive Approach To Comply With The ADA & Adhere
            To WCAG!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              // className="lime-button text-lg py-6 px-8 rounded-md"
              className="text-lg text-akcess-black hover:text-black hover:bg-akcess-lime py-6 px-8 rounded-md transition-all duration-300 bg-akcess-lime"
              onClick={handleContactUs}
              id="demobutton"
            >
              Request a Demo
            </Button>
            <Button
              // variant="outline"
              onClick={handleConsultation}
              className="text-lg py-6 px-8 rounded-md border border-white bg-akcess-darkgray"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-akcess-lime opacity-5 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-akcess-lime opacity-5 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
    </section>
  );
};
export default HeroSection;
