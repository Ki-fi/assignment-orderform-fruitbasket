import './Button.css';

function Button({ buttonName, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
        >{buttonName}</button>
    )
}

export default Button;