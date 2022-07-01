import {ReactNode} from "react";

interface SocialLinkProps {
    label: string,
    link: string,
    textClass: string,
    icon: ReactNode,
}

export function SocialLink({label, link, textClass, icon}: SocialLinkProps) {
    return (
        <a
            href={link}
            className={`inline-flex items-center text-base font-medium tracking-tight ${textClass}`}
        >
            {icon}
            <span className="ml-4">{label}</span>
        </a>
    )
}