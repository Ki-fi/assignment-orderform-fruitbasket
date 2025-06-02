
import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import {useState} from "react";
import Input from "./components/input/Input.jsx";

function App() {
    const [nrOfStrawberries, setNrOfStrawberries] = useState(0);
    const [nrOfBananas, setNrOfBananas] = useState(0);
    const [nrOfApples, setNrOfApples] = useState(0);
    const [nrOfKiwis, setNrOfKiwis] = useState(0);

    function handleSubmit(event) {
        console.log("test");
        event.preventDefault();
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Card
            fruitName={"🍓 Aardbeien"}
            amount={nrOfStrawberries}
            setAmount={setNrOfStrawberries}/>
        <Card
            fruitName={"🍌 Bananen"}
            amount={nrOfBananas}
            setAmount={setNrOfBananas}/>
        <Card
            fruitName={"🍎 Appels"}
            amount={nrOfApples}
            setAmount={setNrOfApples}/>
        <Card
            fruitName={"🥝 Kiwi's"}
            amount={nrOfKiwis}
            setAmount={setNrOfKiwis}/>
        <Button
            type="button"
            buttonName={"Reset"}
            onClick={() => {
                setNrOfApples(0);
                setNrOfBananas(0);
                setNrOfKiwis(0);
                setNrOfStrawberries(0)}}
        />
        <form onSubmit={handleSubmit}>
            <h1>Bestelformulier</h1>
            <Input
                type={"text"}
                labelName={"Voornaam"}
            />
            <Input
                type={"text"}
                labelName={"Achternaam"}
            />
            <Input
                type={"text"}
                labelName={"Leeftijd"}
                defaultValue={0}
            />
            <Input
                type={"text"}
                labelName={"Postcode"}
            />
            <label htmlFor="frequencySelect">Bezorgfrequentie</label>
            <select name="frequencySelect" id="">
                <option value="weekly">Iedere week</option>
                <option value="biweekly">Om de week</option>
                <option value="monthly">Iedere maand</option>
            </select>
            <div className="radioGroup">
                <label><input type="radio" name="delivery" checked="true"/>Overdag</label>
                <label><input type="radio" name="delivery"/>s' Avonds</label>
            </div>
            <label>Opmerking<textarea name="opmerking" cols="20" rows="7"></textarea></label>
            <div className="checkbox">
            <label><input type="checkbox" name="conditions"/>Ik ga akkoord met de voorwaarden</label>
            </div>
            <Button
                type="submit"
                buttonName={"Verzend"}/>
            {/*Ik ben vergeten hoe je ervoor kan zorgen dat je button niet over de hele breedte schaalt.*/}
        </form>
    </>
  )
}

export default App
