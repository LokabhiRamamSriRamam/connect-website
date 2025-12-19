import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "FREE",
      price: "0",
      description: "For individuals looking to explore basic organization.",
      buttonText: "Sign up",
      buttonColor: "bg-yellow-400",
      features: [
        "100 Bookmarks",
        "Basic Search & Categorization",
        "Single Device Sync",
        "Community Support"
      ],
      highlight: false
    },
    {
      name: "PERSONAL",
      price: isYearly ? "7.99" : "9.99",
      description: "Perfect for power users who need advanced tools.",
      buttonText: "Go Personal",
      buttonColor: "bg-yellow-400",
      features: [
        "Unlimited Bookmarks",
        "Advanced AI Search",
        "Smart Tagging & Auto-folders",
        "Multi-device Sync",
        "Priority Email Support"
      ],
      highlight: true // This is the blue card in your image
    },
    {
      name: "TEAM",
      price: isYearly ? "16.99" : "20.99",
      description: "Best for collaborative teams and small businesses.",
      buttonText: "Start Free Trial",
      buttonColor: "bg-yellow-400",
      features: [
        "Everything in Personal",
        "Shared Team Folders",
        "Role-based Permissions",
        "Admin Dashboard",
        "24/7 Priority Support"
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-yellow-400 min-h-screen py-20 px-6 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
          WANNA HAVE AN <br /> AI THOUGHT PARTNER?
        </h1>
        <p className="text-lg font-medium mb-10 opacity-80">
          Choose the plan that's best for your productivity.
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <span className={`text-sm font-bold ${!isYearly ? 'text-black' : 'opacity-50'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-black rounded-full relative transition-colors duration-300"
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${isYearly ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-bold ${isYearly ? 'text-black' : 'opacity-50'}`}>Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 text-left shadow-2xl transition-transform hover:scale-105 ${
                plan.highlight ? 'bg-white border-t-8 border-blue-600' : 'bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-black mb-2 ${plan.highlight ? 'text-blue-600' : 'text-gray-400'}`}>
                {plan.name}
              </h3>
              
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-black">$</span>
                <span className="text-6xl font-black tracking-tight">{plan.price}</span>
                <span className="text-gray-500 font-bold ml-1">/mo</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-8 h-12">
                {plan.description}
              </p>

              <button className={`w-full py-4 rounded-xl font-black text-sm uppercase mb-8 shadow-md hover:opacity-90 transition-opacity ${plan.buttonColor}`}>
                {plan.buttonText}
              </button>

              <div className="space-y-4">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">What's included:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start text-sm font-medium">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-black mb-2 italic">ADD-ON</h2>
          <p className="text-sm font-bold opacity-70 mb-8 tracking-widest uppercase">Pay as you go for extra AI power</p>
          
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl text-left border-t-8 border-gray-100">
            <h3 className="text-gray-400 font-black text-sm mb-2">TITAN AI</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-black">$</span>
              <span className="text-5xl font-black">3.91</span>
              <span className="text-gray-500 font-bold ml-1">/1k tokens</span>
            </div>
            <button className="w-full bg-yellow-400 py-3 rounded-xl font-black text-sm uppercase shadow-md mb-4">
              Get Started
            </button>
            <p className="text-xs text-center text-gray-500 font-bold">No monthly commitment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;