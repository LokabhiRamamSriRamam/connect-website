import React, { useState } from "react";
import { gsap } from "gsap";

// --- FAQ DATA ---
const faqData = [
  {
    question:
      "How do Sherlock, Picasso, and Stark actually 'connect' to my business?",
    answer:
      "Our platform uses secure API integrations to connect with your existing tools—like Shopify, Stripe, Slack, and Google Workspace. Once connected, Sherlock reads the data, Stark manages the operations, and Picasso generates content based on your real-time business metrics.",
  },
  {
    question: "Do I need to prompt each AI model individually?",
    answer:
      "No. The models are designed to be autonomous and collaborative. For example, if Sherlock identifies a drop in customer retention, he automatically briefs Picasso to create a 'Win-back' email campaign and Stark to schedule a follow-up task for your team.",
  },
  {
    question: "Is my business data used to train the global AI models?",
    answer:
      "Absolutely not. Your data is siloed and encrypted. While our models learn your business patterns to provide better insights, that intelligence stays within your private instance and is never shared or used to train public models.",
  },
  {
    question: "Can I customize the 'personality' or brand voice of Picasso.AI?",
    answer:
      "Yes. In the Picasso settings, you can upload your brand guidelines, past successful marketing copy, and preferred tone of voice. Picasso will then ensure all generated visuals and text align perfectly with your brand identity.",
  },
  {
    question: "What happens if the AI suggests an action I don't agree with?",
    answer:
      "You always have the final say. By default, Stark and Picasso operate in 'Draft Mode,' where they prepare tasks and content for your approval. You can toggle 'Full Auto' only when you are comfortable with their performance.",
  },
];

// --- ICON COMPONENT (Replaces material-icons-outlined for flexibility) ---
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // If we are opening a new one, make it "pop" slightly
    if (isOpening) {
      gsap.fromTo(
        `.faq-item-${index}`,
        { scale: 0.97, translateY: 5 },
        { scale: 1, translateY: 0, duration: 0.5, ease: "back.out(2)" }
      );
    }
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 font-sans smooth-font">
      <div className="container mx-auto max-w-4xl">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our scaling solution.
          </p>
        </div>

        {/* --- FAQ ACCORDION CONTAINER --- */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              // Add the specific class below (faq-item-${index})
              className={`faq-item-${index} border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-white/70 backdrop-blur-sm transition-all duration-300`}
            >
              <button
                className="flex justify-between items-center w-full text-left p-6 font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <ChevronIcon isOpen={openIndex === index} />
              </button>

              {/* --- ANSWER CONTENT --- */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-base text-gray-600 border-t border-purple-200 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA AT BOTTOM --- */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? Our team is ready to help.
          </p>
          <button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 px-8 py-3.5 rounded-full font-semibold text-base shadow-lg inline-flex items-center">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
