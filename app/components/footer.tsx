import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-white mb-3">Premier Auto Plus</h4>
          <p>High-quality vehicles. Great prices. Exceptional service.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/inventory" className="hover:text-white">Inventory</Link></li>
            <li><Link href="/financing" className="hover:text-white">Financing</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p>Email: info@premierautoplus.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Location: New York, USA</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <p>Socials coming soon</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-xs">
        &copy; {new Date().getFullYear()} Premier Auto Plus. All rights reserved.
      </div>
    </footer>
  );
}
