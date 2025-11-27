import "../styles/footer.css"
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer id="footer" class="bg-gray-800 dark:bg-black text-gray-300">
            <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
            <h3 class="text-lg font-bold text-white mb-4">Beaconlight Hospital</h3>
            <p class="mb-2">45, Are Street, Old Ife Road, OYO State, Nigeria</p>
            <p class="mb-2">
            <a class="hover:text-white transition-colors" href="tel:123-456-7890">Phone: (+234) 8133075822</a>
            </p>
            <p>
            <a class="hover:text-white transition-colors" href="mailto:contact@beaconlight.org">Email: info@beaconlighthospital.com</a>
            </p>
            </div>
            <div>
            <h3 class="text-md font-semibold text-white mb-4">Quick Links</h3>
            <ul class="space-y-2">
            <li><a class="hover:text-white transition-colors" href="#">Home</a></li>
            <li><a class="hover:text-white transition-colors" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</a></li>
            <li><a class="hover:text-white transition-colors" onClick={() => document.getElementById("find-doctor").scrollIntoView({ behavior: "smooth" })}>Find a Doctor</a></li>
            <Link to="/Appointment">
             <li><a class="hover:text-white transition-colors">Book Appointment</a></li>
            </Link>
           
            </ul>
            </div>
            <div>
            <h3 class="text-md font-semibold text-white mb-4">Follow Us</h3>
            <div class="flex space-x-4">
            <a class="text-gray-400 hover:text-white transition-colors" href="#">
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
            </a>
            <a class="text-gray-400 hover:text-white transition-colors" href="#">
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.801 4.649-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.455-.086 2.679 1.714 5.868 2.712 9.283 2.712 11.121 0 17.211-9.214 17.211-17.211 0-.262-.006-.523-.018-.783a12.307 12.307 0 003.018-3.13z"></path>
            </svg>
            </a>
            </div>
            </div>
            </div>
            <div id="scrolltop" onClick={() => document.getElementById("header").scrollIntoView({ behavior: "smooth" })}><img src="/images/arrow.png" alt="Arrow up" /></div>
            <div class="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
            <p>© 2024 Beaconlight Hospital. All Rights Reserved.</p>
            </div>
            </div>
        </footer>
    );
}
export default Footer;