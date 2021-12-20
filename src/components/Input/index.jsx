const Input = ({
    id,
    name,
    className,
    type = "text",
    placeholder,
    value,
    onChange,
    errors,
}) => {
    return (
        <div className="w-75">
            <input
                id={id}
                name={name}
                className={`form-control ${
                    errors
                        ? errors.find((error) => error.fieldName === name)
                            ? "is-invalid"
                            : ""
                        : ""
                } `}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
            {errors ? (
                errors.find((error) => error.fieldName === name) ? (
                    <p className="invalid-feedback m-0">
                        {
                            errors.find((error) => error.fieldName === name)
                                .message
                        }
                    </p>
                ) : null
            ) : null}
        </div>
    );
};
export default Input;
