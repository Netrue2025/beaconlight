

export default function Hero() {
  return (
    <div className="bg-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center">
      <section className="pt-32 pb-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center">
      <div className="flex-1">
      <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
      Quality Healthcare You Can Trust
      </h1>
      <p className="mt-4 text-slate-600 text-lg">
      Providing professional and compassionate medical services for you and your family.
      </p>
      <div className="mt-6 flex gap-4">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">Book Appointment</button>
      <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">Find a Doctor</button>
      </div>
      </div>


      <div className="flex-1 mt-10 lg:mt-0">
      <img src="/images/doctor.jpeg" alt="Doctor" className="w-full rounded-xl shadow-lg" />
      </div>
      </section>
    </div>
  );
}
