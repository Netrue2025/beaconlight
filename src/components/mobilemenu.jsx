import "../styles/mobilemenu.css"

export function Mobilemenu(){
    return(
        <div>
            <div className="mobile-inner-content flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-700">
                <nav className="items-center gap-8">
                <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("find-doctor").scrollIntoView({ behavior: "smooth" })}>Find a Doctor</a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>About Us</a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>Contact</a>
                </nav>
            </div>
        </div>
    )
}