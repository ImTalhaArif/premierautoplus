import Header from "../components/header";
import Footer from "../components/footer";

export default function Financing() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          Financing Options
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "All Credit Welcome",
              desc: "We work with all credit types and help you get approved quickly.",
              image: "/finance1.jpg",
            },
            {
              title: "Flexible Payments",
              desc: "Choose payment plans that suit your budget and income.",
              image: "/finance2.jpg",
            },
            {
              title: "Low Interest Rates",
              desc: "Get competitive interest rates through our partnered banks.",
              image: "/finance3.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover rounded-md mb-4"
                alt={item.title}
              />
              <h2 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h2>
              <p className="text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}