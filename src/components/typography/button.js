
const Button = ({to, name,attr}) => {
    return (
        <>
            {to ? 
                <a href={to} className={attr}>
                    {name}
                </a> : 
                <button className={attr}>
                    {name}
                </button>
            }
        </>
    );
}

export default Button;