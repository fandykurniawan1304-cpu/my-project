"use client";


import * as motion from "motion/react-client"

export default function Keunggulan() {
  const items = [
    {
      icon: "🎯",
      title: "Fokus ke Penjualan",
      desc: "Setiap sistem yang kami bangun diarahkan untuk menghasilkan konversi, bukan hanya trafik.",
      delay: 0.1,
    },
    {
      icon: "📊",
      title: "Full Funnel Tracking",
      desc: "Kami pastikan setiap klik, view, hingga transaksi dapat dipantau secara real-time.",
      delay: 0.2,
    },
    {
      icon: "⚡",
      title: "Proses Cepat & Transparan",
      desc: "Tanpa ribet dan tanpa hidden cost. Semua tahap jelas, rapi, dan terukur.",
      delay: 0.3,
    },
    {
      icon: "🛡️",
      title: "Aman & Andal",
      desc: "Sistem dibangun dengan standar keamanan modern dan infrastruktur yang teruji.",
      delay: 0.4,
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Kenapa <span className="text-blue-700 dark:text-blue-400">SystemaIndonesia</span>?
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:-translate-y-2 transition-all flex flex-col items-start gap-4"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}