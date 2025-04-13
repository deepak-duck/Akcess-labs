
import React from 'react';
import FaqItem from '@/components/FaqItem';

const FAQSection = () => {
  // FAQ data
  const faqs = [
    {
      question: "What are the basic accessibility requirements for websites?",
      answer: "Basic accessibility requirements include proper heading structure, alternative text for images, keyboard navigability, sufficient color contrast, form labels, and ARIA attributes where needed. Websites should follow WCAG guidelines (Web Content Accessibility Guidelines) to ensure they are accessible to people with various disabilities.",
      defaultOpen: true
    },
    {
      question: "How do accessibility requirements differ across industries?",
      answer: "While core accessibility principles remain the same, requirements can vary by industry. Government websites often have stricter compliance needs (Section 508), while healthcare and financial services may need to consider additional privacy and usability features. E-commerce sites focus heavily on product descriptions and checkout processes, and educational platforms need accessible learning materials.",
      defaultOpen: false
    },
    {
      question: "What are the legal implications of having an inaccessible website?",
      answer: "Inaccessible websites can lead to legal challenges under laws like the Americans with Disabilities Act (ADA), with increasing litigation in recent years. Organizations may face lawsuits, financial penalties, mandatory remediation, damage to reputation, and loss of potential customers. Implementing accessibility standards proactively is both legally prudent and beneficial for business.",
      defaultOpen: false
    },
    {
      question: "How long does it typically take to make a website accessible?",
      answer: "The timeline depends on your website's size and complexity. Small sites might take weeks, while larger platforms could take several months. Our assessment process identifies key issues and creates a prioritized remediation plan to address critical barriers first, ensuring steady improvement in accessibility.",
      defaultOpen: false
    },
    {
      question: "Can accessibility improvements also benefit users without disabilities?",
      answer: "Absolutely! Accessibility improvements often enhance usability for everyone. Features like clearer navigation, better organized content, and keyboard shortcuts benefit all users. Additionally, accessibility improvements often lead to better SEO, improved mobile experiences, and faster load times.",
      defaultOpen: false
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Find answers to common questions about web accessibility and our services
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                defaultOpen={faq.defaultOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
