export default function TradebloomWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <section className="px-8 md:px-20 py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400"></div>
              <span className="text-2xl font-semibold">tradebloom</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Recover abandoned carts by negotiating deals on WhatsApp.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              We don't just send reminders. Tradebloom actively negotiates with drop-off customers and closes sales for your store using AI.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white shadow-lg">Book Demo</button>
              <button className="px-6 py-3 rounded-2xl border border-slate-300">See How It Works</button>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-6 border">
            <div className="space-y-4">
              <div className="bg-slate-100 p-3 rounded-2xl text-sm">Hey Rahul, noticed you left Alpha Sneakers in your cart. What's holding you back?</div>
              <div className="bg-green-100 p-3 rounded-2xl text-sm ml-10">Too expensive bro.</div>
              <div className="bg-slate-100 p-3 rounded-2xl text-sm">I can offer 12% discount or free express shipping if you checkout in 10 mins.</div>
              <div className="bg-green-100 p-3 rounded-2xl text-sm ml-10">Make it 15% and I'll buy.</div>
              <div className="bg-slate-100 p-3 rounded-2xl text-sm">12% + free running socks. Deal? Here's your checkout link.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Built for Indian buying behavior</h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Indian shoppers abandon carts because they expect better pricing, promo codes, or simply get distracted. Tradebloom turns cultural bargaining into recovered revenue.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl border shadow-sm">
              <h3 className="font-semibold text-xl">70%+ Cart Drop-offs</h3>
              <p className="mt-3 text-slate-600">Traditional reminders fail because they do not engage intent.</p>
            </div>
            <div className="p-8 rounded-3xl border shadow-sm">
              <h3 className="font-semibold text-xl">WhatsApp Native</h3>
              <p className="mt-3 text-slate-600">Customers reply where they already negotiate naturally.</p>
            </div>
            <div className="p-8 rounded-3xl border shadow-sm">
              <h3 className="font-semibold text-xl">Dynamic AI Offers</h3>
              <p className="mt-3 text-slate-600">Discounts, shipping, bundles, upsell logic — all automated.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-semibold">Plug into Shopify & WooCommerce</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>• Detect abandoned carts instantly</li>
              <li>• Trigger AI WhatsApp negotiation</li>
              <li>• Generate personalized checkout links</li>
              <li>• Track conversion uplift</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 border">
            <div className="text-sm text-slate-500">Recovered Revenue Dashboard</div>
            <div className="text-4xl font-semibold mt-3">₹12.4L</div>
            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100"></div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-semibold">Turn abandoned carts into closed deals</h2>
        <p className="mt-4 text-slate-600">Start negotiating automatically in less than 15 minutes.</p>
        <button className="mt-8 px-8 py-4 rounded-2xl bg-slate-900 text-white shadow-lg">Start Free Pilot</button>
      </section>
    </div>
  );
}