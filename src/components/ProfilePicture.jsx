import me from "../assets/imgs/me.jpg";

function ProfilePicture() {

    return (
        <div className="relative">
            <img className="profile-picture rounded-md w-48" src={me} alt="Adam Eastwood"/>
        </div>
    )

}

export default ProfilePicture;
