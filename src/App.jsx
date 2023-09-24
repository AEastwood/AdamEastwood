import me from './assets/imgs/img.png'
import Socials from "./components/Socials.jsx";
import Contact from "./components/Contact.jsx";

function App() {

    return (
        <div
            className="
                flex
                flex-col
                gap-6
                h-screen
                bg-gray-200/60
                dark:bg-google
                dark:text-gray-100
                justify-center
                items-center
            "
        >
            <img className="rounded-md w-48" src={me} alt="Adam Eastwood"/>

            <span className="text-4xl xl:text-5xl font-semibold antialiased font-PlayFairDisplay tracking-wider">
                Adam Eastwood
            </span>

            <Contact/>
            <Socials/>
        </div>
    )
}

export default App
