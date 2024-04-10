import Socials from "./components/Socials.jsx";
import ProfilePicture from "./components/ProfilePicture.jsx";

function App() {

    return (
        <div
            className="flex flex-col gap-6 h-screen bg-gradient-to-br bg-gradient-to-tr from-indigo-500 to-blue-500 text-gray-100 justify-center items-center"
        >
            {/* Profile Picture */}
            <ProfilePicture/>

            {/* My Name */}
            <span className="flex flex-col gap-3 tracking-wider mb-3">
                <span
                    className="text-6xl xl:text-5xl font-semibold antialiased drop-shadow"
                >
                    Adam Eastwood
                </span>

                <div
                    className="text-lg text-center text-gray-150"
                >
                    Code all the things.
                </div>
            </span>

            {/* Socials */}
            <Socials/>
        </div>
    )
}

export default App
