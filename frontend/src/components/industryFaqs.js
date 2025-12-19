// industryFaqs.js

const industryFaqs = {
  salon: [
    {
      question: "How can AI help manage appointment bookings and walk-ins?",
      answer:
        "Connect uses AI-driven demand prediction to balance online bookings and walk-in traffic in real time, reducing overbooking, idle staff time, and customer wait times.",
    },
    {
      question: "Can this help optimize staff scheduling?",
      answer:
        "Yes. Connect analyzes historical traffic, seasonal trends, and live demand to dynamically recommend staffing levels, helping salons operate efficiently without manual planning.",
    },
    {
      question: "How does Connect improve customer experience?",
      answer:
        "By adapting instantly to demand spikes, Connect ensures faster check-ins, smoother appointment flows, and consistent service quality during peak hours.",
    },
    {
      question: "Does this integrate with existing POS or booking systems?",
      answer:
        "Connect integrates via APIs and SDKs, allowing it to work alongside your existing booking, POS, and CRM systems without requiring replacement.",
    },
  ],

  ecommerce: [
    {
      question: "How does Connect handle flash sales and traffic spikes?",
      answer:
        "Connect scales instantly at the application layer using AI-driven orchestration, preventing slowdowns or crashes during flash sales and promotional events.",
    },
    {
      question: "Can it reduce cart abandonment caused by latency?",
      answer:
        "Yes. By maintaining consistent response times during high load, Connect helps reduce checkout latency, directly improving conversion rates.",
    },
    {
      question: "Does this work across global regions?",
      answer:
        "Connect intelligently routes traffic and resources across regions, ensuring reliable performance for global customers.",
    },
  ],

  fintech: [
    {
      question: "Is Connect suitable for real-time financial transactions?",
      answer:
        "Yes. Connect is designed for low-latency, high-throughput workloads such as payments, trading activity, and transaction processing.",
    },
    {
      question: "How does AI help in financial scaling decisions?",
      answer:
        "Instead of static thresholds, Connect uses AI to predict transaction bursts and allocate resources before bottlenecks occur.",
    },
    {
      question: "Can this work with regulated environments?",
      answer:
        "Connect supports secure isolation, auditability, and integration with compliance-focused infrastructure commonly used in regulated industries.",
    },
  ],

  healthcare: [
    {
      question: "How does Connect support healthcare workloads?",
      answer:
        "Connect ensures reliable performance for patient portals, appointment systems, and real-time data access, even during demand surges.",
    },
    {
      question: "Can it scale during emergencies or peak usage?",
      answer:
        "Yes. Connect reacts instantly to sudden spikes in usage without requiring pre-provisioned infrastructure.",
    },
    {
      question: "Is data security considered in scaling decisions?",
      answer:
        "Security and isolation are built into Connect’s architecture, ensuring sensitive healthcare data remains protected at scale.",
    },
  ],

  gaming: [
    {
      question: "How does Connect handle sudden player spikes?",
      answer:
        "Connect scales in real time at the application layer, preventing matchmaking delays and server overload during launches or live events.",
    },
    {
      question: "Does this reduce latency for real-time gameplay?",
      answer:
        "Yes. AI-driven routing ensures consistent low-latency performance even during peak concurrent usage.",
    },
  ],

  default: [
    {
      question: "How does Connect work across different industries?",
      answer:
        "Connect operates at the application layer using AI-driven orchestration, allowing it to adapt to different workloads without industry-specific infrastructure changes.",
    },
    {
      question: "What makes Connect an AI-first platform?",
      answer:
        "AI continuously drives scaling, routing, and resource allocation decisions based on live system behavior instead of static rules.",
    },
    {
      question: "Can Connect integrate with existing systems?",
      answer:
        "Yes. Connect integrates via APIs and SDKs and works alongside existing infrastructure and tools.",
    },
  ],
};

export default industryFaqs;
