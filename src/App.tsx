import socialsData from "./data/socials.json";
import Socials from "./components/Socials";
import ProfilePicture from "./components/ProfilePicture";

function App() {

    return (
        <div
            className="flex flex-col gap-6 h-screen bg-gradient-to-br bg-gradient-to-tr from-indigo-500 to-blue-500 text-gray-100 justify-center items-center"
        >
            {/* Profile Picture */}
            <ProfilePicture/>

            {/* My Name */}
            <div className="flex flex-col gap-3 tracking-wider mb-3 text-center">
                <div className="text-6xl xl:text-5xl font-semibold antialiased drop-shadow">
                    Adam Eastwood
                </div>

                <div className="text-lg text-center text-gray-150">
                    Code all the things.
                </div>
            </div>

            {/* Socials */}
            <Socials data={socialsData}/>
        </div>
    )
}

export default App
