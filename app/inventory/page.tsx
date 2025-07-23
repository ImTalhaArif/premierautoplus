"use client";

import { useState } from "react";
import cars from "./cars.json"; // paste the JSON content in this file
import Header from "../components/header";
import Footer from "../components/footer";

export default function Inventory() {
  const [query, setQuery] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesQuery = `${car.make} ${car.model}`.toLowerCase().includes(query.toLowerCase());
    const matchesMake = makeFilter ? car.make === makeFilter : true;
    const matchesPrice = priceFilter
      ? (priceFilter === "lt10k" && car.price < 10000) ||
        (priceFilter === "10k-20k" && car.price >= 10000 && car.price <= 20000) ||
        (priceFilter === "gt20k" && car.price > 20000)
      : true;

    return matchesQuery && matchesMake && matchesPrice;
  });

  const uniqueMakes = [...new Set(cars.map((car) => car.make))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Used Cars Inventory</h1>

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
              className="bg-white rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-bold">
                  {car.year} {car.make} {car.model}
                </h2>
                <p className="text-sm text-gray-600">{car.mileage.toLocaleString()} miles • {car.color} • {car.fuel}</p>
                <p className="text-blue-700 font-bold mt-2">${car.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
