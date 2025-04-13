
import React from 'react';
import StatCard from '@/components/StatCard';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-akcess-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-akcess-lime">About Us</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              We are here to make great design accessible and delightful for everyone
            </h3>
            <p className="mb-6 text-gray-300 text-lg leading-relaxed">
              At Akcess Labs, we believe that accessibility isn't just a checkbox—it's a fundamental aspect of 
              creating technology that truly serves everyone. Our team of experts specializes in making digital 
              experiences accessible to all users, regardless of their abilities or disabilities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine technical expertise with a deep understanding of accessibility standards to help 
              businesses create inclusive digital experiences. Our approach not only ensures compliance 
              with legal requirements but also improves the overall user experience for everyone.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-akcess-lime rounded-lg opacity-20 transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Team working on accessibility solutions" 
              className="rounded-lg w-full h-auto object-cover shadow-2xl relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          <StatCard 
            number="15+"
            title="Years Experience"
            description="Over a decade and a half of delivering exceptional accessibility solutions for businesses of all sizes."
          />
          <StatCard 
            number="50M+"
            title="Monthly Engagements"
            description="Our solutions help millions of users access digital content every month, creating more inclusive experiences."
          />
          <StatCard 
            number="400k+"
            title="User Accessibility"
            description="Hundreds of thousands of users with disabilities can now access digital content thanks to our solutions."
          />
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Mission</h3>
          <p className="text-gray-300 mb-16 text-lg max-w-4xl mx-auto leading-relaxed">
            Our mission is to create a more inclusive digital world where technology works for everyone, 
            regardless of ability or disability. We believe that accessibility is not just about 
            compliance—it's about creating better experiences for all users. By combining technical expertise 
            with a deep understanding of accessibility needs, we help businesses build digital products 
            that everyone can use and enjoy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-start gap-5">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-12 h-12 shrink-0 text-akcess-black font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="font-bold mb-3 text-xl">Expert Team</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our team consists of certified accessibility experts with years of experience in creating inclusive digital experiences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-12 h-12 shrink-0 text-akcess-black font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="font-bold mb-3 text-xl">Advisory Board</h4>
                <p className="text-gray-300 leading-relaxed">
                  Our advisory board includes individuals with disabilities who provide valuable insights into accessibility needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-akcess-lime rounded-full flex items-center justify-center w-12 h-12 shrink-0 text-akcess-black font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="font-bold mb-3 text-xl">Industry Recognition</h4>
                <p className="text-gray-300 leading-relaxed">
                  We're recognized leaders in the accessibility field, regularly featured in industry publications and conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
