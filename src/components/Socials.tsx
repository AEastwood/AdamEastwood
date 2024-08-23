import {useState} from "react";
import Button from "./Button";
import {Icon} from './types/Icon.ts'

export default function Socials({data}) {
    const [socialIcons] = useState<Icon[]>(data);

    return (
        <div className="flex gap-8">
            {socialIcons.map((socialIcon) => {
                return (
                    <Button
                        key={socialIcon.name}
                        socialIcon={socialIcon}
                    />
                );
            })}
        </div>
    )

}
