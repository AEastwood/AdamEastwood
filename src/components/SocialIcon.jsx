function SocialIcon(props) {
    return (
        <img
            className="hover:scale-[1.3] transition"
            src={props.icon}
            alt={props.name}
        />
    )
}

export default SocialIcon;
