import {useState} from "react";
import SocialIcon from "./SocialIcon.jsx";

function Socials() {

    const [socialIcons] = useState([
        // {
        //     name: "ESG",
        //     icon: "imgs/socials/esg.svg",
        //     url: "https://esg.cx"
        // },
        {
            name: "GitHub",
            icon: "/imgs/socials/github.svg",
            url: "https://github.com/aeastwood"
        },
        {
            name: "LinkedIn",
            icon: "imgs/socials/linkedin.svg",
            url: "https://www.linkedin.com/in/adeastwood/"
        },
        {
            name: "Instagram",
            icon: "imgs/socials/instagram.svg",
            url: "https://www.instagram.com/aeasywood/"
        },
        {
            name: "X",
            icon: "imgs/socials/x.svg",
            url: "https://x.com/adeastwood"
        },
        {
            name: "Email Me",
            icon: "imgs/socials/mail.svg",
            url: "mailto:hello@ae.codes"
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
