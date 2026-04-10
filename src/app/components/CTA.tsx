"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CompanyInfo } from "../lib/types";

const DEFAULT_WHATSAPP = "6285285033374";
const DEFAULT_WHATSAPP_MESSAGE = "Halo tim SystemaIndonesia, saya ingin konsultasi terkait kebutuhan sistem digital untuk bisnis saya. Mohon bantuannya ya.";

function normalizeWhatsAppPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "62" + digits.slice(1);
  if (!digits.startsWith("62")) return "62" + digits;
  return digits;
}

function buildWhatsAppUrl(phone: string, text?: string): string {
  const normalized = normalizeWhatsAppPhone(phone);
  const params = new URLSearchParams({ phone: normalized });
  if (text) params.set("text", text);
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export default function CTA() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const whatsappNumber = companyInfo?.whatsapp != null ? companyInfo.whatsapp : (companyInfo?.phone != null ? companyInfo.phone : DEFAULT_WHATSAPP);
  const whatsappUrl = buildWhatsAppUrl(whatsappNumber, DEFAULT_WHATSAPP_MESSAGE);
  return (
    <section
      id="cta"
      className="py-24 bg-blue-700 dark:bg-blue-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold leading-tight"
        >
          Siap Menghasilkan <span className="text-yellow-300">Penjualan</span> dari Sistem Digital Anda?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
        >
          Konsultasi GRATIS bersama tim SystemaIndonesia. Kita bantu bangun sistem digital yang terukur dan fokus hasil.
        </motion.p>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block mt-8 px-10 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-50 transition text-lg"
        >
          Konsultasi Sekarang
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-blue-200"
        >
          Tidak ada biaya. Tidak ada komitmen. Konsultasi 100% gratis.
        </motion.p>
      </div>
    </section>
  );
}