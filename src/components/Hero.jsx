import "../styles/hero.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div>
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="@container inner-container">
            <Swiper 
            
              modules={[Navigation, Autoplay, Pagination]}
              navigation                // ← arrows enabled
              autoplay={{
                delay: 3000,            // ← slide every 3 seconds
                disableOnInteraction: false,
              }}
              loop={true}               // ← infinite loop
              pagination={{ clickable: true }} // optional dots
              className="h-screen w-full swipper"
            >
              <SwiperSlide>
                <div style={{backgroundImage: "url(/images/doctor1.JPG)"}} className="background-container min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 sm:px-12" data-alt="A smiling, professional doctor in a modern hospital setting" >
                  <div className="flex flex-col gap-4 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-6xl">
                    Quality healthcare you can trust
                  </h1>
                  <h2 className="text-white text-base font-normal leading-normal sm:text-lg ">
                    Providing compassionate, comprehensive, and advanced medical care to our community.
                  </h2>
                  </div>
                  <div className=" btn-container flex flex-wrap gap-4 mt-4">
                  <button className="btn1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                  <Link to={"/appointment"}><span className="truncate" >Book an Appointment</span></Link>
                  </button>
                  <button className="btn2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-gray-700 text-gray-800 dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <span className="truncate">Find a Doctor</span>
                  </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{backgroundImage: "url(/images/doctors.JPG)"}} className="background-container min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 sm:px-12" data-alt="A smiling, professional doctor in a modern hospital setting" >
                  <div className="flex flex-col gap-4 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-6xl">
                    Vibrant and talented Healcare Proffessionals
                  </h1>
                  <h2 className="text-white text-base font-normal leading-normal sm:text-lg ">
                    We bring the best healcare proffessionals you trust
                  </h2>
                  </div>
                  <div className=" btn-container flex flex-wrap gap-4 mt-4">
                  <button className="btn1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                  <Link to={"/appointment"}><span className="truncate" >Book an Appointment</span></Link>
                  </button>
                  <button className="btn2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-gray-700 text-gray-800 dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <span className="truncate">Find a Doctor</span>
                  </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{backgroundImage: "url(/images/doctor2.JPG)"}} className="background-container min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 sm:px-12" data-alt="A smiling, professional doctor in a modern hospital setting" >
                  <div className="flex flex-col gap-4 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-6xl">
                    Seemless Healthcare Services
                  </h1>
                  <h2 className="text-white text-base font-normal leading-normal sm:text-lg ">
                    We bring the best healcare services to your doorstep.
                  </h2>
                  </div>
                  <div className=" btn-container flex flex-wrap gap-4 mt-4">
                  <button className="btn1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                  <Link to={"/appointment"}><span className="truncate" >Book an Appointment</span></Link>
                  </button>
                  <button className="btn2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-gray-700 text-gray-800 dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <span className="truncate">Find a Doctor</span>
                  </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </section>
    </div>
  );
}
