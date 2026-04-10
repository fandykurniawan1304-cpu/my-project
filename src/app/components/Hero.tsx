"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bangun Sistem Digital yang <span className="text-blue-700 dark:text-blue-400">Menghasilkan Penjualan</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Kami membangun sistem digital yang terukur, rapi, dan fokus menghasilkan pelanggan untuk bisnis Anda.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Link
              href="#layanan"
              className="px-7 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Lihat Layanan
            </Link>

            <Link
              href="#pricing"
              className="px-7 py-3 bg-blue-700 text-white dark:bg-blue-600 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-700 transition"
            >
              Lihat Harga
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 opacity-90 shadow-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}