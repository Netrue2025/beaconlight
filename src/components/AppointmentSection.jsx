import "../styles/AppointmentSection.css";
import { Link } from "react-router-dom";

export default function AppointmentSection() {
  return (
    <section className="appointment-section px-6 lg:px-24 py-20 mw-[100%]">
      <div className="inner-cont flex flex-col gap-6 justify-center w-[600px] items-center m-auto">
        <h1 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
          Ready for Your Visit? Book an Appointment Today
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Booking an appointment is quick and easy. Let us take care of you.
        </p>
        <button className="btn1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
          <Link to={"/appointment"}><span className="truncate" >Book an Appointment</span></Link>
        </button>
      </div>
    </section>
  );
}
