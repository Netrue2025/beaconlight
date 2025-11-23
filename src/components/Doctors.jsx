import "../styles/doctor.css"

export default function Doctors() {


    return (
        <div className="doctors-main-container">
            <section className="section w-full bg-secondary dark:bg-background-dark py-16 sm:py-24">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">Meet Our Expert Medical Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">Our dedicated professionals are here to provide you with exceptional care.</p>
                </div>
                <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="doctor-con flex flex-col bg-background-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="doctor1 w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Professional headshot of Dr. Emily Carter" ></div>
                <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-800 dark:text-white text-xl font-bold leading-normal">Dr. Emily Carter, MD</p>
                <p className="text-primary text-sm font-medium leading-normal mb-4">Cardiology</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-opacity-90 transition-colors">
                <span className="truncate">View Doctor</span>
                </button>
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                </a>
                </div>
                </div>
                </div>
                <div className="doctor-con flex flex-col bg-background-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="doctor2 w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Professional headshot of Dr. Ben Adams" ></div>
                <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-800 dark:text-white text-xl font-bold leading-normal">Dr. Ben Adams, DO</p>
                <p className="text-primary text-sm font-medium leading-normal mb-4">Pediatrics</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-opacity-90 transition-colors">
                <span className="truncate">View Doctor</span>
                </button>
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                </a>
                </div>
                </div>
                </div>
                <div className="doctor-con flex flex-col bg-background-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="doctor3 w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Professional headshot of Dr. Chloe Davis" ></div>
                <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-800 dark:text-white text-xl font-bold leading-normal">Dr. Chloe Davis, PhD</p>
                <p className="text-primary text-sm font-medium leading-normal mb-4">Neurology</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-opacity-90 transition-colors">
                <span className="truncate">View Doctor</span>
                </button>
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                </a>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    )
}