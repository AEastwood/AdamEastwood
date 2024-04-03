import me from "../assets/imgs/me.jpg";
import {useState} from "react";

function ProfilePicture() {
    const [clickCount, setClickCount] = useState(0);

    const addClick = () => {
        setClickCount(clickCount + 1);

        switch(clickCount) {
            case 0:
                console.log('Seems you have clicked my picture... I wonder what will happen if you continue...')
                break;

            case 10:
                console.log('What? ADAM is evolving!')
                break;

            case 19:
                console.log('Congratulations! Your ADAM turned into a BeyBlade!')
                break;
        }

    }

    return (
        <div>
            {(clickCount > 19) ?
                <>
                    <img
                        className="profile-picture rounded-md w-48 transition duration-200 hover:shadow-xl motion-safe:animate-spin"
                        src={me}
                        alt="Adam Eastwood"
                    />
                </>
                :
                <>
                    <button className="relative">
                        <img
                            className="profile-picture rounded-md w-48 hover:scale-[1.08] transition duration-200 hover:shadow-xl"
                            src={me}
                            alt="Adam Eastwood"
                            onClick={addClick}
                        />
                    </button>
                </>
            }
        </div>
    )
}

export default ProfilePicture;
