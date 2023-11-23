import me from './assets/imgs/img.jpg'
import Socials from "./components/Socials.jsx";
import Contact from "./components/Contact.jsx";
import ProfilePicture from "./components/ProfilePicture.jsx";

function App() {

    return (
        <div
            className="
                flex
                flex-col
                gap-6
                h-screen
                bg-google/80
                text-gray-100
                justify-center
                items-center
                bg-repeat
            "
        >

            <ProfilePicture/>

            <span className="text-4xl xl:text-5xl font-semibold antialiased font-PlayFairDisplay tracking-wider">
                Adam Eastwood
            </span>

            <Contact/>
            <Socials/>
        </div>
    )
}

export default App
