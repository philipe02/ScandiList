const Input = ({ id, className, placeholder, value, onChange }) => {
    return (
        <input
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        ></input>
    );
};
export default Input;
