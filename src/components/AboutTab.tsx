const reasons = [
  {
    title: "Mobile-First Design",
    description:
      "Every site I build looks and works beautifully on phones first — because that is where your customers are.",
  },
  {
    title: "WhatsApp-Friendly",
    description:
      "Integrated WhatsApp messaging so customers can reach you instantly — the way people actually communicate today.",
  },
  {
    title: "Simple Admin Tools",
    description:
      "You get an easy-to-use dashboard to update menus, view orders, and manage bookings — no tech experience needed.",
  },
  {
    title: "Local Bolzano Focus",
    description:
      "I am based in Bolzano and understand the local market. German, Italian, and English — I speak your customers&apos; language.",
  },
  {
    title: "Clean & Professional",
    description:
      "No clutter, no fluff. Every design is purposeful, accessible, and built to make your business look its best.",
  },
  {
    title: "Support After Launch",
    description:
      "I do not disappear after launch. You get ongoing support, updates, and someone who actually picks up when you call.",
  },
];

export default function AboutTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-cream mb-4">About</h2>
      <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
        I help cafes, restaurants, bakeries, salons, and small businesses in
        Bolzano create mobile-friendly websites, online menus, booking flows, and
        simple admin tools that make it easier for customers to contact, order, or
        reserve.
      </p>

      <h3 className="text-xl font-semibold text-cream mb-6">
        Why Work With Me
      </h3>

      <div className="grid md:grid-cols-2 gap-5">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/[0.08] transition-colors"
          >
            <h4 className="text-gold font-semibold mb-1.5">{reason.title}</h4>
            <p className="text-cream/60 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
