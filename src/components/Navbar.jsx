export default function Navbar() {
return (
<div className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold text-blue-600">MediCare</h1>
<ul className="hidden md:flex gap-6 text-slate-700 font-medium">
<li>Home</li>
<li>Services</li>
<li>Doctors</li>
<li>Appointment</li>
<li>Contact</li>
</ul>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">Book Now</button>
</div>
);
}
