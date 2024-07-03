import ConfettiExplosion from 'react-confetti-explosion';
import me from "../../public/imgs/me.jpg";
import {useState} from "react";

function ProfilePicture() {
    const [isExploding, setIsExploding] = useState(false);
    const secondsOfExplosion = 7 * 1000;
    const addClick = () => {
        setIsExploding(true);
        console.log('TADA 🎉🎉');
    }

    return (
        <div className="relative">
            <button className="mx-auto relative z-20" disabled={isExploding}>
                <img
                    className="profile-picture rounded-md w-48 hover:scale-[1.08] transition duration-250 hover:shadow-xl"
                    src={me}
                    alt="Adam Eastwood"
                    onClick={addClick}
                />
            </button>
            <div className="w-full inherit pb-[50%] ml-[50%] absolute top-0 left-0 z-10">
                {isExploding && (
                    <ConfettiExplosion
                        duration={secondsOfExplosion}
                        height="110vh"
                        width="1500"
                        force={0.65}
                        particleSize={10}
                        onComplete={() => setIsExploding(false)}
                    />
                )}
            </div>
        </div>

    )
}

export default ProfilePicture;
