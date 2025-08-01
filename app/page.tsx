import Header from "./components/header"; import Footer from "./components/footer"; import Image from "next/image"; import Link from "next/link";

export default function Home() { return ( <div className="flex flex-col min-h-screen"> <Header /> <main className="flex-grow bg-white text-black"> {/* Hero Section */} <section className="relative bg-[url('/hero-car.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center"> <div className="bg-black/60 p-8 rounded-xl text-white max-w-3xl text-center shadow-lg"> <h1 className="text-5xl font-bold mb-4">Premier Auto Plus</h1> <p className="text-xl mb-6">Your Car. Your Terms. Delivered.</p> <Link
href="/inventory"
className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white text-lg font-medium"
> Browse Inventory </Link> </div> </section>

{/* Mission */}
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4 text-black">Our Mission</h2>
      <p className="text-xl max-w-4xl mx-auto text-gray-800">
        To empower car buyers with a seamless, digital-first experience that puts them in the driver’s seat — without ever needing to set foot on a lot.
        <br />
        <em>“We don’t just sell cars. We deliver dreams.”</em>
      </p>
    </section>

    {/* Problem */}
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">The Problem</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          ["Limited Inventory", "Buyers are often forced to choose from what’s available on the lot."],
          ["Mismatch with Needs", "Customers may not get the exact car they desire."],
          ["Time-Consuming Process", "Visits, paperwork, and negotiations waste valuable time."],
        ].map(([title, desc], i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
            <p className="text-gray-800">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Solution */}
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">Our Solution</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        <ul className="list-disc list-inside text-lg space-y-4 text-gray-800">
          <li>100% Online Car Shopping</li>
          <li>Virtual Showroom with 360° Vehicle Tours</li>
          <li>Financing & Trade-ins Handled Online</li>
          <li>Home or Hub Delivery Options</li>
          <li>Vehicle Sourcing On Demand</li>
        </ul>
        <Image
          src="/solution-showroom.jpg"
          width={500}
          height={350}
          alt="Virtual Showroom"
          className="rounded-xl shadow-md"
        />
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 text-black">How It Works</h2>
      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-lg">
        {[
          "Browse or request your ideal car",
          "Get pre-approved in minutes",
          "Finalize purchase with e-docs",
          "Get your vehicle delivered or pick up",
          "Drive with confidence with 7-day return policy",
        ].map((step, index) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow">
            <div className="text-blue-600 text-3xl font-bold mb-2">{index + 1}</div>
            <p className="text-gray-800">{step}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Premier Auto Plus */}
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">Why Premier Auto Plus?</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        <ul className="list-disc list-inside text-lg space-y-3 text-gray-800">
          <li>Carvana-style convenience with local support</li>
          <li>Licensed dealer with delivery logistics in place</li>
          <li>Personalized car sourcing & financing support</li>
          <li>Physical location = trust & service</li>
        </ul>
        <Image
          src="/why-premier.jpg"
          width={500}
          height={350}
          alt="Trusted Service"
          className="rounded-xl shadow-md"
        />
      </div>
    </section>

    {/* Revenue Model */}
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">Our Revenue Model</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-lg text-gray-800">
        {[
          "Vehicle Sales (Online & On-Demand)",
          "Financing Partner Commissions",
          "Extended Warranties & Protection Plans",
          "Trade-In Vehicle Resales",
          "Delivery Fees (Outside Free Zone)",
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Customer Experience */}
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">Customer Experience</h2>
      <blockquote className="italic text-xl max-w-3xl mx-auto text-gray-800">
        “I didn’t settle for what was on the lot. Premier Auto Plus found me the car I actually wanted, and they delivered it to my driveway.” — Happy Customer
      </blockquote>
      <Image
        src="/happy-customer.jpg"
        alt="Happy Customer"
        width={500}
        height={350}
        className="mt-8 mx-auto rounded-xl shadow"
      />
    </section>

    {/* Final CTA */}
    <section className="py-20 px-6 bg-blue-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">The Future of Car Buying is Here</h2>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        Premier Auto Plus is building the new standard. Experience it today.
      </p>
      <Link
        href="/inventory"
        className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100"
      >
        Get Started
      </Link>
    </section>
  </main>
  <Footer />
</div>

); }