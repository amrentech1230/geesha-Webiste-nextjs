'use client'

export default function FoodIndustryPage() {
  return (
    <div className="font-sans">

      {/* HERO SECTION */}
      <section className="bg-[url('https://itinfonity.io/itinfonity/wp-content/uploads/2025/08/food.webp')] bg-cover bg-center text-white py-24 text-center relative">
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Supercharge Your Food Business
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            End-to-End Technology Solutions for modern restaurants and delivery apps.
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
            Get Free Demo
          </button>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section className="py-16 text-center bg-white">
        <div className="flex justify-center items-end gap-6">
          <img src="/food.webp" className="w-3/4 max-w-200" />
         
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-6 max-w-6xl mx-auto">
          {[
            { value: "1.5M", label: "Orders Processed" },
            { value: "50k", label: "Customers" },
            { value: "150k", label: "Transactions" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-orange-500">
                {item.value}
              </h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stand Out in the Online Food Business
        </h2>
        <p className="text-gray-300 mb-6">
          Build powerful food delivery and restaurant apps.
        </p>
        <button className="bg-orange-500 px-6 py-3 rounded-lg">
          View Case Study
        </button>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          AI-Powered Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Real-time Tracking",
            "Smart Inventory",
            "Delivery Optimization",
            "AI Recommendations",
            "Secure Payments",
            "Analytics Dashboard",
          ].map((item, i) => (
            <div key={i} className="p-6 shadow rounded-xl">
              <h3 className="font-semibold mb-2">{item}</h3>
              <p className="text-gray-500 text-sm">
                Advanced solutions for food business growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE CTA */}
      <section className="bg-[url('/food-banner.jpg')] bg-cover bg-center py-20 text-center text-white relative">
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Dominate Food Delivery Industry
          </h2>
          <button className="bg-orange-500 px-6 py-3 rounded-lg">
            Book Free Demo
          </button>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Restaurant App",
            "Delivery System",
            "Admin Dashboard",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">{item}</h3>
              <p className="text-gray-500 text-sm">
                Build scalable solutions for your food business.
              </p>
              <button className="text-orange-500 mt-3">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Your Chance To Stand Out
        </h2>
        <button className="bg-white text-orange-500 px-6 py-2 rounded">
          Get Started
        </button>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Let’s Build Your Dream App!
            </h2>
            <p className="text-gray-300">
              We help startups and enterprises grow.
            </p>
          </div>

          <form className="bg-white text-black p-6 rounded-lg">
            <input placeholder="Name" className="w-full mb-3 p-2 border" />
            <input placeholder="Email" className="w-full mb-3 p-2 border" />
            <textarea placeholder="Message" className="w-full mb-3 p-2 border" />
            <button className="bg-blue-600 text-white px-4 py-2">
              Submit
            </button>
          </form>

        </div>
      </section>

    </div>
  )
}