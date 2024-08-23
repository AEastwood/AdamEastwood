import {useState} from "react";
import Icon from "./Icon.tsx";
import {SocialButtonProps} from "../types/SocialButton";

export default function Button({socialIcon}: SocialButtonProps) {
    const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

    // Load easter eggs
    const handleMouseEnter = () => {
        switch (socialIcon.name) {
            case 'LinkedIn':
                const timeout: number = setTimeout((): void => {
                    window.location.href = socialIcon.url;
                }, 2500);
                setHoverTimeout(timeout);
                break;

            default:
                return;
        }

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
