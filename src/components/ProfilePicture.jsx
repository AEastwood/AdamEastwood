import christmasHat from "../assets/imgs/christmas-hat.png";
import me from "../assets/imgs/img.jpg";

function ProfilePicture() {

    return (
        <div className="relative">
            <img className="christmas-hat" src={christmasHat} alt="Christmas Hat"/>
            <img className="rounded-md w-48" src={me} alt="Adam Eastwood"/>
        </div>
    )

}

export default ProfilePicture;
