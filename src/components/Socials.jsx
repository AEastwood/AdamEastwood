import Instagram from "./Socials/Instagram.jsx";
import Twitter from "./Socials/Twitter.jsx";
import Github from "./Socials/Github.jsx";
import LinkedIn from "./Socials/LinkedIn.jsx";

function Socials() {

    return (
        <div className="flex justify-between w-1/5 px-12">
            <a href="" title="Instagram">
                <Instagram/>
            </a>
            <a href="" title="Twitter">
                <Twitter/>
            </a>
            <a href="" title="GitHub">
                <Github/>
            </a>
            <a href="" title="LinkedIn">
                <LinkedIn/>
            </a>
        </div>
    )

}

export default Socials
