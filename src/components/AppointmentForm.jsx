import "../styles/appointmentform.css";

export default function AppointmentForm() {
  return (
    <section className="appointment-section px-6 lg:px-24 py-20">
      <div className="inner-cont flex flex-col gap-6 justify-center w-[600px] items-center m-auto">
        <h1 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
          Ready for Your Visit? Book an Appointment Today
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Booking an appointment is quick and easy. Let us take care of you.
        </p>

        <form action="" className="flex flex-col gap-4 mw-[600px] w-[100%]">
          <input className="border p-3 rounded" placeholder="Full Name" />
          <input className="border p-3 rounded" placeholder="Phone Number" />
          <select className="border p-3 rounded">
            <option>Choose Department</option>
            <option>Cardiology</option>
            <option>Pediatrics</option>
            <option>Diagnostics</option>
          </select>
          <input className="border p-3 rounded" type="date" />
          <button className="bg-blue-600 text-white p-3 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
