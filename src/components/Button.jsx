

const Button = ({name, border}) => {
    return (
        <button className={`button ${border}`}>
            {name}
        </button>
    );
};

export default Button;