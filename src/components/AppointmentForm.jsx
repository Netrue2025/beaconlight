export default function AppointmentForm() {
return (
    <section className="px-6 lg:px-24 py-20">
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Book Appointment</h2>
    <form className="flex flex-col gap-4">
    <input className="border p-3 rounded" placeholder="Full Name" />
    <input className="border p-3 rounded" placeholder="Phone Number" />
    <select className="border p-3 rounded">
    <option>Choose Department</option>
    <option>Cardiology</option>
    <option>Pediatrics</option>
    <option>Diagnostics</option>
    </select>
    <input className="border p-3 rounded" type="date" />
    <button className="bg-blue-600 text-white p-3 rounded-lg">Submit</button>
    </form>
    </div>
    </section>
);
}