"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "1.5 Juta",
      desc: "Untuk bisnis kecil yang baru mulai membangun sistem digital.",
      features: [
        "Landing Page Profesional",
        "Setup Google Maps",
        "Integrasi WhatsApp",
        "Aman & Mobile Friendly",
      ],
      popular: false,
      delay: 0.1,
    },
    {
      name: "Growth",
      price: "3.5 Juta",
      desc: "Paket paling populer khusus bisnis yang mau scale up.",
      features: [
        "Website Bisnis Premium",
        "Company Profile PDF",
        "SEO Basic Setup",
        "Integrasi Payment Gateway",
        "Optimasi Google Maps",
      ],
      popular: true,
      delay: 0.2,
    },
    {
      name: "Scale Pro",
      price: "7 Juta",
      desc: "Solusi lengkap untuk perusahaan yang ingin sistem otomatis.",
      features: [
        "Full Funnel Website",
        "Tracking & Analytics",
        "WhatsApp Automation",
        "Integrasi Payment Gateway",
        "Setup Google & Social Ads",
        "Support 30 Hari",
      ],
      popular: false,
      delay: 0.3,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Paket Harga <span className="text-blue-700 dark:text-blue-400">SystemaIndonesia</span>
        </motion.h2>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              viewport={{ once: true }}
              className={
                plan.popular
                  ? "relative p-8 rounded-2xl shadow-xl border bg-blue-700 text-white border-blue-600 dark:bg-blue-600 hover:-translate-y-2 transition-all"
                  : "relative p-8 rounded-2xl shadow-xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all"
              }
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Paling Populer
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-sm opacity-80 mt-1">{plan.desc}</p>

              <div className="mt-6">
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm opacity-70">/ sekali bayar</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-green-500 dark:text-green-400 text-lg">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#cta"
                className={
                  plan.popular
                    ? "block mt-8 py-3 text-center font-semibold rounded-lg bg-white text-blue-700 hover:bg-gray-100 transition"
                    : "block mt-8 py-3 text-center font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                }
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}