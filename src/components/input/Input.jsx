import './Input.css';

function Input({ labelName, placeholderText, defaultValue, name, value, onChange }) {
    return(
        <label>{labelName}
        <input
            placeholder={placeholderText}
            defaultValue={defaultValue}
            name={name}
            value={value}
            onChange={onChange}
        />
        </label>
    )
}

export default Input;