import Button from "../button/Button.jsx";
import './Card.css';

function Card({ fruitName, amount, setAmount }) {

    return (
        <div>
        <article>
            <h1>{fruitName}</h1>
            <Button
                buttonName={"-"}
                onClick={() => {(amount === 0) ? setAmount(0) : setAmount(amount - 1)}}/>
            <p>{amount}</p>
            <Button
                buttonName={"+"}
                onClick={() => {setAmount(amount + 1)}}/>
        </article>
        </div>
    )
}

export default Card;