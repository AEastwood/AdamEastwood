import {useState} from "react";
import SocialIcon from "./SocialIcon.jsx";

function Socials() {

    const [socialIcons] = useState([
        {
            name: "GitHub",
            icon: "/imgs/socials/github.svg",
            url: "https://github.com/aeastwood"
        },
        {
            name: "Instagram",
            icon: "imgs/socials/instagram.svg",
            url: "https://github.com/aeastwood"
        },
        {
            name: "LinkedIn",
            icon: "imgs/socials/linkedin.svg",
            url: "https://github.com/aeastwood"
        },
        {
            name: "X",
            icon: "imgs/socials/x.svg",
            url: "https://x.com/adeastwood"
        },
    ]);

    return (
        <div className="flex gap-8">
            {socialIcons.map((socialIcon) => {
                return (
                    <a
                        className="w-8 h-8"
                        key={socialIcon.name}
                        href={socialIcon.url}
                        title={socialIcon.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SocialIcon
                            name={socialIcon.name}
                            icon={socialIcon.icon}
                        />
                    </a>
                )
            })}

        </div>
    )

}

export default Socials
