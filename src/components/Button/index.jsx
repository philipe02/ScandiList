const Button = ({ id, className, type, title, onClick }) => {
    return (
        <button
            id={id}
            className={`btn border-2 mx-1 shadow ${className}`}
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
