import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[url('/hero-car.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
          <div className="bg-black/60 p-8 rounded-lg text-white max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Car Today</h1>
            <p className="text-lg mb-6">Explore our top-notch inventory with the best deals in town.</p>
            <Link
              href="/inventory"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium"
            >
              Browse Inventory
            </Link>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Premier Auto Plus?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">Wide Inventory</h3>
              <p>Hundreds of cars in all price ranges and brands.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">Financing Options</h3>
              <p>We help you get approved regardless of credit score.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p>Thousands of happy customers and 5-star reviews.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
