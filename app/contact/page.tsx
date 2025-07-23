import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center mb-10 text-gray-600">We’d love to hear from you. Drop us a message!</p>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full border p-3 rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full border p-3 rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea rows={5} className="w-full border p-3 rounded-md" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
