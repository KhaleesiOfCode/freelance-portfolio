const services = [
  {
    title: "Business Websites",
    description:
      "Mobile-friendly, fast-loading websites tailored to your business. A clean online presence that helps customers find you and get in touch.",
  },
  {
    title: "Online Ordering Tools",
    description:
      "Let customers browse your menu and place orders directly from their phones. Simple to manage, easy for your customers to use.",
  },
  {
    title: "Booking & Reservation Systems",
    description:
      "Accept reservations and appointment bookings online. Customers pick a time, you get notified, and availability updates automatically.",
  },
  {
    title: "QR Menus",
    description:
      "Replace paper menus with scannable QR codes that link to your digital menu. Customers view it on their phone — no app, no hassle.",
  },
  {
    title: "Admin Dashboards",
    description:
      "A private panel where you manage orders, update your menu, view bookings, and track customer activity. No technical skills required.",
  },
  {
    title: "Monthly Maintenance",
    description:
      "Ongoing support to keep your site updated, secure, and running smoothly. Content updates, performance checks, and peace of mind.",
  },
];

export default function ServicesTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-cream mb-4">Services</h2>
      <p className="text-cream/70 leading-relaxed mb-8 max-w-3xl">
        Everything a local business needs to thrive online — from a simple
        website to a complete ordering and booking system.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-colors"
          >
            <h3 className="text-lg font-semibold text-cream mb-2">
              {service.title}
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
