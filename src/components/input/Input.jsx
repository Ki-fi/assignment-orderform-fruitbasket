import './Input.css';

function Input({ type, labelName, placeholderText, defaultValue, name }) {
    return(
        <label>{labelName}
        <input
            type={type}
            placeholder={placeholderText}
            defaultValue={defaultValue}
            name={name}
        />
        </label>
    )
}

export default Input;