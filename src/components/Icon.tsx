function Icon(props) {
    return (
        <img
            className="hover:scale-[1.3] transition rounded"
            src={props.icon}
            alt={props.name}
        />
    )
}

export default Icon;
