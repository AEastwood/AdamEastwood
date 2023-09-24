import Instagram from "./Socials/Instagram.jsx";
import Twitter from "./Socials/Twitter.jsx";
import Github from "./Socials/Github.jsx";
import LinkedIn from "./Socials/LinkedIn.jsx";

function Socials() {

    return (
        <div className="flex gap-8">
            <a
                href="https://instagram.com/aeasywood"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
            >
                <Instagram/>
            </a>
            <a
                href="https://twitter.com/ADEastwood"
                title="Twitter"
                target="_blank"
                rel="noreferrer"
            >
                <Twitter/>
            </a>
            <a
                href="https://github.com/AEastwood"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
            >
                <Github/>
            </a>
            <a
                href="https://www.linkedin.com/in/adeastwood/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedIn/>
            </a>
        </div>
    )

}

export default Socials
