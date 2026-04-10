"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Layanan", href: "#layanan" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400"
        >
          Systema<span className="text-gray-900 dark:text-gray-200">Indonesia</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition font-medium"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#cta"
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold shadow-md transition"
          >
            Konsultasi Gratis
          </a>

          {/* Dark Mode Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? (
              <Moon size={22} className="text-gray-800" />
            ) : (
              <Sun size={22} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2"
        >
          <Menu size={28} className="text-gray-900 dark:text-gray-200" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          >
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute top-0 right-0 w-72 h-full bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-8"
            >
              <button onClick={() => setMenuOpen(false)} className="self-end p-1">
                <X size={26} className="text-gray-800 dark:text-gray-300" />
              </button>

              <div className="flex flex-col gap-5 text-lg">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="mt-auto w-full py-3 bg-blue-700 text-white rounded-lg text-center font-semibold shadow-md hover:bg-blue-800 transition"
              >
                Konsultasi Gratis
              </a>

              <button
                onClick={toggleTheme}
                className="p-3 mt-3 border rounded-lg flex items-center gap-3 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
              >
                {theme === "light" ? (
                  <>
                    <Moon size={20} /> Aktifkan Dark Mode
                  </>
                ) : (
                  <>
                    <Sun size={20} /> Aktifkan Light Mode
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}