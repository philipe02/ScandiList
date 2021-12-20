const Button = ({
    id,
    className,
    type = "bg-primary",
    title,
    onClick,
    form,
}) => {
    return (
        <button
            id={id}
            className={`btn border-2 mx-1 ${className}`}
            type={type}
            form={form}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
