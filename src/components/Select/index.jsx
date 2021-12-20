const Select = ({
    id,
    name,
    placeholder,
    errors,
    onChange,
    value,
    options,
}) => {
    return (
        <div className="w-75">
            <select
                id={id}
                name={name}
                className={`form-select ${
                    errors.find((error) => error.fieldName === name)
                        ? "is-invalid"
                        : ""
                }`}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            >
                <option value="">{placeholder}</option>
                {options
                    ? options.map((option) => (
                          <option key={option.value} value={option.value}>
                              {option.text}
                          </option>
                      ))
                    : null}
            </select>
            {errors.find((error) => error.fieldName === name) ? (
                <p className="invalid-feedback m-0">
                    {errors.find((error) => error.fieldName === name).message}
                </p>
            ) : null}
        </div>
    );
};

export default Select;
