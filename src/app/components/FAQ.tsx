"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah benar SystemaIndonesia fokus ke penjualan, bukan hanya traffic?",
      a: "Benar. Semua sistem yang kami bangun diarahkan untuk menghasilkan leads & penjualan. Termasuk tracking, optimasi funnel, hingga integrasi WhatsApp.",
    },
    {
      q: "Berapa lama proses pembuatan website?",
      a: "Rata-rata 3–7 hari untuk landing page. Untuk website bisnis lengkap, 7–14 hari tergantung kompleksitas.",
    },
    {
      q: "Apakah bisa revisi?",
      a: "Bisa. Kami menyediakan revisi sampai hasilnya sesuai dengan kebutuhan bisnis Anda.",
    },
    {
      q: "Apakah SystemaIndonesia menyediakan layanan iklan?",
      a: "Ya. Kami menyediakan layanan Google Ads, Social Ads, dan optimasi Maps untuk bantu Anda mendapatkan pelanggan lebih cepat.",
    },
    {
      q: "Apakah bisa custom sistem otomatis?",
      a: "Bisa. Mulai dari otomasi WhatsApp, payment gateway, tracking funnel, hingga dashboard custom.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Pertanyaan yang Sering{" "}
          <span className="text-blue-700 dark:text-blue-400">Ditanyakan</span>
        </motion.h2>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900 dark:text-gray-200"
              >
                <span>{item.q}</span>

                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}