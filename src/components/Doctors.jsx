export default function Doctors() {
const doctors = [
{ name: "Dr. Williams", specialty: "Cardiologist" },
{ name: "Dr. Sarah Kim", specialty: "Pediatrician" },
{ name: "Dr. James Lee", specialty: "Radiologist" },
];


return (
<section className="px-6 lg:px-24 py-20 bg-white">
<h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Doctors</h2>
<div className="grid md:grid-cols-3 gap-8">
{doctors.map((d, i) => (
<div key={i} className="p-6 bg-slate-50 rounded-xl shadow text-center hover:scale-105 transition">
<div className="w-24 h-24 bg-blue-200 rounded-full mx-auto"></div>
<h3 className="mt-4 text-xl font-semibold text-blue-600">{d.name}</h3>
<p className="text-slate-600">{d.specialty}</p>
<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">View Profile</button>
</div>
))}
</div>
</section>
);
}