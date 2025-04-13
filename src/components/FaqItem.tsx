
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-white font-bold text-xl">{question}</span>
        <span className="text-akcess-lime ml-4">
          {isOpen ? (
            <ChevronUp size={24} />
          ) : (
            <ChevronDown size={24} />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="py-5 text-gray-300 text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
