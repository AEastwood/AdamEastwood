import {useState} from "react";
import Icon from "./Icon.tsx";

interface SocialButtonProps {
    socialIcon: {
        name: string;
        url: string;
        icon: string;
    };
}

export default function Button({socialIcon}: SocialButtonProps) {
    const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

    const handleMouseEnter = () => {
        if (socialIcon.name !== 'LinkedIn') return;

        const timeout = setTimeout(() => {
            window.location.href = socialIcon.url;
        }, 2500);
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        if (!hoverTimeout) return;

        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
    };

    return (
        <a
            className="w-8 h-8"
            href={socialIcon.url}
            title={socialIcon.name}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon name={socialIcon.name} icon={socialIcon.icon}/>
        </a>
    );
}
