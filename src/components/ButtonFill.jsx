

const ButtonFill = ({name, border}) => {
    return (
        <button className={`button-fill ${border}`}>
            {name}
        </button>
    );
};

export default ButtonFill;