"use client";

import { useState } from "react"; import carsData from "./cars.json" assert { type: "json" }; import Header from "../components/header"; import Footer from "../components/footer";

interface Car { id: number; make: string; model: string; type: string; year: number; image: string; price: number; mileage: number; fuel: string; color: string; }

const cars: Car[] = carsData;

export default function Inventory() { const [query, setQuery] = useState(""); const [makeFilter, setMakeFilter] = useState(""); const [priceFilter, setPriceFilter] = useState(""); const [modalCar, setModalCar] = useState<Car | null>(null);

const filteredCars = cars.filter((car) => { const matchesQuery = ${car.make} ${car.model}.toLowerCase().includes(query.toLowerCase()); const matchesMake = makeFilter ? car.make === makeFilter : true; const matchesPrice = priceFilter ? (priceFilter === "lt10k" && car.price < 10000) || (priceFilter === "10k-20k" && car.price >= 10000 && car.price <= 20000) || (priceFilter === "gt20k" && car.price > 20000) : true;

return matchesQuery && matchesMake && matchesPrice;

});

const uniqueMakes = [...new Set(cars.map((car) => car.make))];

return ( <div className="min-h-screen flex flex-col"> <Header /> <main className="flex-grow bg-gray-50 px-6 py-10"> <h1 className="text-3xl font-bold mb-6 text-center">Used Cars Inventory</h1>

{/* Filters */}
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <input
        type="text"
        placeholder="Search by make or model..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-md w-64"
      />
      <select
        value={makeFilter}
        onChange={(e) => setMakeFilter(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">All Makes</option>
        {uniqueMakes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">All Prices</option>
        <option value="lt10k">Under $10,000</option>
        <option value="10k-20k">$10,000 - $20,000</option>
        <option value="gt20k">Over $20,000</option>
      </select>
    </div>

    {/* Cars Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105 relative"
        >
          <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">
              {car.year} {car.make} {car.model}
            </h2>
            <p className="text-sm text-gray-600">
              {car.mileage.toLocaleString()} miles • {car.color} • {car.fuel}
            </p>
            <p className="text-blue-700 font-bold mt-2">
              ${car.price.toLocaleString()}
            </p>
            <button
              onClick={() => setModalCar(car)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Modal */}
    {modalCar && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-[95%] max-w-xl relative shadow-lg">
          <button
            className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl"
            onClick={() => setModalCar(null)}
          >
            &times;
          </button>
          <h3 className="text-xl font-semibold mb-4">
            Place a bid for {modalCar.year} {modalCar.make} {modalCar.model}
          </h3>
          <form action="https://www.escrow.com/checkout" method="post" target="_blank">
            <input type="hidden" name="type" value="domain_name" />
            <input type="hidden" name="non_initiator_email" value="Johnirving8383@gmail.com" />
            <input type="hidden" name="non_initiator_id" value="3784037" />
            <input type="hidden" name="non_initiator_role" value="seller" />
            <input type="hidden" name="title" value="Bid Now" />
            <input type="hidden" name="currency" value="USD" />
            <input type="hidden" name="domain" value="http://premierautoplus.vercel.app/inventory" />
            <input type="hidden" name="price" value={modalCar.price} />
            <input type="hidden" name="concierge" value="false" />
            <input type="hidden" name="with_content" value="false" />
            <input type="hidden" name="inspection_period" value="2" />
            <input type="hidden" name="fee_payer" value="buyer" />
            <input type="hidden" name="return_url" value="http://premierautoplus.vercel.app/inventory" />
            <input type="hidden" name="button_types" value="both" />
            <input type="hidden" name="auto_accept" value="20000" />
            <input type="hidden" name="auto_reject" value="10000" />
            <input type="hidden" name="item_key" value="car" />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mt-2"
            >
              Proceed to Escrow
            </button>
          </form>
        </div>
      </div>
    )}
  </main>
  <Footer />
</div>

); }

