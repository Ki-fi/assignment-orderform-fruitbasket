import Button from "../button/Button.jsx";
import './Card.css';

function Card({ fruitName, stateName, setAmount, amount }) {

    return (
        <div>
        <article>
            <h1>{fruitName}</h1>
            <Button
                type="button"
                buttonName={"-"}
                onClick={() =>
                    setAmount((currentState) => {
                        const newAmount = Math.max(Number(amount) - 1, 0);
                        return {
                            ...currentState,
                            [stateName]: newAmount,
                        };
                    })
                }/>
            <p>{amount}</p>
            <Button
                type="button"
                buttonName={"+"}
                onClick={() =>
                    setAmount((currentState) => ({
                        ...currentState,
                        [stateName]: Number(amount) + 1,
                    }))
                }/>
        </article>
        </div>
    )
}

export default Card;