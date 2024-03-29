import Socials from "./components/Socials.jsx";
import Contact from "./components/Contact.jsx";
import ProfilePicture from "./components/ProfilePicture.jsx";

function App() {

    return (
        <div
            className="flex flex-col gap-6 h-screen bg-google text-gray-100 justify-center items-center bg-repeat"
        >
            {/* Profile Picture */}
            <ProfilePicture/>

            {/* My Name */}
            <span className="text-4xl xl:text-5xl font-semibold antialiased font-PlayFairDisplay tracking-wider">
                Adam Eastwood
            </span>

            {/* Contact Details */}
            <Contact/>

            {/* Socials */}
            <Socials/>
        </div>
    )
}

export default App
