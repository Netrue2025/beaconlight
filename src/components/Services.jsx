export default function Services() {
const services = [
{ title: "Cardiology", desc: "Heart-related treatments and diagnostics." },
{ title: "Pediatrics", desc: "Healthcare services for children." },
{ title: "Diagnostics", desc: "Advanced scanning and medical tests." },
];


return (
<section className="px-6 lg:px-24 py-20">
<h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Services</h2>
<div className="grid md:grid-cols-3 gap-8">
{services.map((s, i) => (
<div key={i} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
<h3 className="text-xl font-semibold text-blue-600">{s.title}</h3>
<p className="mt-2 text-slate-600">{s.desc}</p>
</div>
))}
</div>
</section>
);
}