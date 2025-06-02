import Button from "../button/Button.jsx";
import './Card.css';

function Card({ fruitName, amount, setAmount }) {

    return (
        <div>
        <article>
            <h1>{fruitName}</h1>
            <Button
                type="button"
                buttonName={"-"}
                onClick={() => {(amount === 0) ? setAmount(0) : setAmount(Number(amount) - 1)}}/>
            <p>{amount}</p>
            <Button
                type="button"
                buttonName={"+"}
                onClick={() => {setAmount(Number(amount) + 1)}}/>
        </article>
        </div>
    )
}

export default Card;