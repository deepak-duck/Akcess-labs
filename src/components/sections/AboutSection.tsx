import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const About = (): JSX.Element => {
  // Data for feature cards (no StatCard, adapted from second template)
  const featureCards = [
    {
      icon: "/frame.svg", // Replace with actual icon path
      title: "15+ Years Experience",
      description:
        "Over a decade and a half of delivering exceptional accessibility solutions for businesses of all sizes.",
    },
    {
      icon: "/frame-2.svg", // Replace with actual icon path
      title: "50M+ Monthly Engagements",
      description:
        "Our solutions help millions of users access digital content every month, creating more inclusive experiences.",
    },
    {
      icon: "/frame-1.svg", // Replace with actual icon path
      title: "400k+ User Accessibility",
      description:
        "Hundreds of thousands of users with disabilities can now access digital content thanks to our solutions.",
    },
  ];

  // Data for info cards (adapted from second template)
  const infoCards = [
    {
      icon: "/frame-4.svg", // Replace with actual icon path
      title: "Expert Team",
      description:
        "Our team consists of certified accessibility experts with years of experience in creating inclusive digital experiences.",
    },
    {
      icon: "/frame-3.svg", // Replace with actual icon path
      title: "Advisory Board",
      description:
        "Our advisory board includes individuals with disabilities who provide valuable insights into accessibility needs.",
    },
    {
      icon: "/frame-5.svg", // Replace with actual icon path
      title: "Industry Recognition",
      description:
        "We're recognized leaders in the accessibility field, regularly featured in industry publications and conferences.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-akcess-lime mb-6">
              About Us
            </h2>
            <h3 className="text-[32px] font-bold text-white mb-8 leading-10">
              AKSCESS LABS is Here to make the world more accessible!
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Akscess Labs, we believe that accessibility isn't just an
              option—it's a necessity! Our mission is to bridge the digital gap
              by providing top-tier accessibility testing and compliance
              solutions to ensure inclusivity for all.
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 bg-akcess-lime rounded-lg opacity-20 transform rotate-3"
              aria-hidden="true"
            ></div>
            <img
              className="w-full h-auto object-cover rounded-lg shadow-2xl relative z-10"
              alt=""
              aria-hidden="true"
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          {featureCards.map((card, index) => (
            <div key={index} className="flex flex-col items-start gap-6">
              <div className="w-12 h-12 bg-akcess-lime rounded-full flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  alt=""
                  aria-hidden="true"
                  src={card.icon}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission and Info Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to create a more inclusive digital world where
                technology works for everyone, regardless of ability or
                disability. We believe that accessibility is not just about
                compliance—it's about creating better experiences for all users.
                By combining technical expertise with a deep understanding of
                accessibility needs, we help businesses build digital products
                that everyone can use and enjoy.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              {infoCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full bg-black rounded-md border-0"
                >
                  <CardContent className="flex items-center gap-6 p-4">
                    <img
                      className="w-9 h-9"
                      alt=""
                      aria-hidden="true"
                      src={card.icon}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
