import "../styles/services.css";


export default function Services() {

    return (
        <div>
            <section class="main-container w-full bg-secondary dark:bg-background-dark py-16 sm:py-24">
                <div class="second-level-con w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">Our Services</h2>
                        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">Comprehensive medical services for every stage of life.</p>
                    </div>

                    <div class="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="card flex flex-col items-center text-center p-6 bg-background-light dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div class="card-icon flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                                <span class="span material-symbols-outlined text-3xl">
                                    <img src="/images/icon1.png" alt="Emergency icon" />
                                </span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Emergency Care</h3>
                            <p class="text-gray-600 dark:text-gray-400">24/7 critical care for urgent medical needs.</p>
                        </div>

                        <div class="card flex flex-col items-center text-center p-6 bg-background-light dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div class="card-icon flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span class="span material-symbols-outlined text-3xl">
                            <img src="/images/icon2.png" alt="Emergency icon" />
                        </span>    
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Pediatrics</h3>
                        <p class="text-gray-600 dark:text-gray-400">Specialized medical care for infants and children.</p>
                        </div>

                        <div class="card flex flex-col items-center text-center p-6 bg-background-light dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <div class="card-icon flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span class="span material-symbols-outlined text-3xl">
                            <img src="/images/icon3.png" alt="Emergency icon" />
                        </span>    
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Cardiology</h3>
                        <p class="text-gray-600 dark:text-gray-400">Advanced heart care from leading specialists.</p>
                        </div>

                        <div class="card flex flex-col items-center text-center p-6 bg-background-light dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div class="card-icon flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                            <span class="span material-symbols-outlined text-3xl">
                                <img src="/images/icon4.png" alt="Emergency icon" />
                            </span>    
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">General Surgery</h3>
                            <p class="text-gray-600 dark:text-gray-400">Expert surgical procedures and patient care.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}