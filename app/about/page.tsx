import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          About Premier Auto Plus
        </h1>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Based in Montgomery, AL",
              desc: "Serving the heart of Alabama with integrity, quality, and hometown pride.",
              image: "/about1.jpg",
            },
            {
              title: "Passion for Used Cars",
              desc: "We specialize in reliable, inspected trucks, SUVs, and sedans you can trust.",
              image: "/about2.jpg",
            },
            {
              title: "Customer-First Approach",
              desc: "Our commitment is to your satisfaction — every step of the way.",
              image: "/about3.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 hover:bg-gray-800 transition-all shadow-lg p-6 rounded-lg text-white"
            >
              <img
                src={item.image}
                className="w-full h-48 object-cover rounded-md mb-4"
                alt={item.title}
              />
              <h2 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h2>
              <p className="text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}