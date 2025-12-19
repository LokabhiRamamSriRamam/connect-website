import React, { useState } from "react";
import industryFaqs from "./industryFaqs";

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const IndustryFAQ = ({ industry }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = industryFaqs[industry] || industryFaqs.default;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            How Connect helps businesses in this industry
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-lg bg-white overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>{item.question}</span>
                <ChevronIcon isOpen={openIndex === index} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-purple-200 pt-4 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFAQ;
