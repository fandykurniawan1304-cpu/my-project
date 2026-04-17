export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            Systema<span className="text-gray-900 dark:text-gray-200">Indonesia</span>
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Kami membangun sistem digital yang menghasilkan penjualan — bukan sekadar traffic.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Navigasi</h4>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
            <li><a href="#keunggulan" className="hover:text-blue-600 dark:hover:text-blue-400">Keunggulan</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 dark:hover:text-blue-400">Layanan</a></li>
            <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
            <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</a></li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Layanan Kami</h4>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
            <li>Google Ads Management</li>
            <li>Website Development</li>
            <li>Business Email Setup</li>
            <li>Payment Gateway Integration</li>
            <li>Marketplace Ads</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Kontak</h4>
          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
            <li>Email: support@systemaindonesia.com</li>
            <li>WhatsApp: +62 85285033374</li>
            <li>Alamat: Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-800 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} SystemaIndonesia — All Rights Reserved.
      </div>
    </footer>
  );
}