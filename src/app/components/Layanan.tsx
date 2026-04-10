"use client";

import { motion } from "framer-motion";

export default function Layanan() {
  const services = [
    {
      icon: "🚀",
      title: "Google & Social Ads",
      desc: "Layanan iklan berbayar yang dirancang untuk menghasilkan penjualan, bukan sekadar traffic.",
      delay: 0.1,
    },
    {
      icon: "🌐",
      title: "Pembuatan Website",
      desc: "Website cepat, modern, dan terukur dengan layout profesional untuk meningkatkan konversi.",
      delay: 0.2,
    },
    {
      icon: "🏢",
      title: "Company Profile Digital",
      desc: "Pembuatan company profile PDF & website company profile untuk brand yang lebih kredibel.",
      delay: 0.3,
    },
    {
      icon: "📍",
      title: "Setup Google Maps",
      desc: "Optimasi Google Maps agar bisnis mudah ditemukan oleh calon pelanggan di area Anda.",
      delay: 0.4,
    },
    {
      icon: "💳",
      title: "Integrasi Payment Gateway",
      desc: "Implementasi pembayaran otomatis untuk website, funnel, atau e-commerce bisnis Anda.",
      delay: 0.5,
    },
    {
      icon: "📱",
      title: "Reaktivasi WhatsApp",
      desc: "Membangun kembali interaksi pelanggan dengan sistem WhatsApp otomatis & terintegrasi.",
      delay: 0.6,
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Layanan <span className="text-blue-700 dark:text-blue-400">SystemaIndonesia</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-all flex flex-col gap-4"
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}