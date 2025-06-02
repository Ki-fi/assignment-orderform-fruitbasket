import './Button.css';

function Button({ type, buttonName, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
        >{buttonName}</button>
    )
}

export default Button;