
import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import {useState} from "react";
import Input from "./components/input/Input.jsx";

function App() {

    const [formState, setFormState] = useState({
        nrOfStrawberries: 0,
        nrOfBananas: 0,
        nrOfApples: 0,
        nrOfKiwis: 0,
        firstName: '',
        lastName: '',
        age: '0',
        zipcode: '',
        frequencySelect: "weekly",
        delivery: "overdag",
        comment: '',
        conditions: false,
    })

    function handleChange(e) {
        const changedField = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedField]: newValue,
        })
    }

    function handleSubmit(event) {
        console.log(`
            voornaam: ${formState.firstName}, 
            achternaam: ${formState.lastName}, 
            leeftijd: ${formState.age}, 
            postcode: ${formState.zipcode}, 
            bestelling: 
            ${formState.nrOfStrawberries} aardbeien,
            ${formState.nrOfBananas} bananen,
            ${formState.nrOfApples} appels,
            ${formState.nrOfKiwis} kiwis,
            bezorgfrequentie: ${formState.frequencySelect}, 
            bezorgmoment: ${formState.delivery}, 
            opmerking: ${formState.comment}, 
            is akkoord met de voorwaarden: ${formState.conditions}`);
        event.preventDefault();
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Card
            fruitName={"🍓 Aardbeien"}
            amount={formState.nrOfStrawberries}
            setAmount={(newAmount) => setFormState({...formState, nrOfStrawberries: newAmount})}/>
        <Card
            fruitName={"🍌 Bananen"}
            amount={formState.nrOfBananas}
            setAmount={(newAmount) => setFormState({...formState, nrOfBananas: newAmount})}/>
        <Card
            fruitName={"🍎 Appels"}
            amount={formState.nrOfApples}
            setAmount={(newAmount) => setFormState({...formState, nrOfApples: newAmount})}/>
        <Card
            fruitName={"🥝 Kiwi's"}
            amount={formState.nrOfKiwis}
            setAmount={(newAmount) => setFormState({...formState, nrOfKiwis: newAmount})}/>
        <Button
            type="button"
            buttonName={"Reset"}
            onClick={() => setFormState({
                ...formState,
                nrOfStrawberries: '0',
                nrOfBananas: '0',
                nrOfApples: '0',
                nrOfKiwis: '0',
            })}
        />
        <form onSubmit={handleSubmit}>
            <h1>Bestelformulier</h1>
            <Input
                labelName={"Voornaam"}
                name={"firstName"}
                value={formState.firstName}
                onChange={handleChange}
            />
            <Input
                labelName={"Achternaam"}
                name={"lastName"}
                value={formState.lastName}
                onChange={handleChange}
            />
            <Input
                labelName={"Leeftijd"}
                name={"age"}
                defaultValue={0}
                value={formState.age}
                onChange={handleChange}
            />
            <Input
                labelName={"Postcode"}
                name={"zipcode"}
                value={formState.zipcode}
                onChange={handleChange}
            />
            <label htmlFor="frequencySelect">Bezorgfrequentie</label>
            <select name="frequencySelect" onChange={handleChange}>
                <option
                    value="weekly"
                >Iedere week
                </option>
                <option
                    value="biweekly"
                >Om de week
                </option>
                <option
                    value="monthly"
                >Iedere maand
                </option>
            </select>
            <div className="radioGroup">
                <label>
                    <input
                        type="radio"
                        name="delivery"
                        value="overdag"
                        checked={formState.delivery === "overdag"}
                        onChange={handleChange}
                    />Overdag
                </label>
                <label>
                    <input
                        type="radio"
                        name="delivery"
                        value="'s avonds"
                        checked={formState.delivery === "'s avonds"}
                        onChange={handleChange}
                    />s' Avonds
                </label>
            </div>
                <label>Opmerking
                    <textarea
                        name="comment"
                        cols="20" rows="7"
                        value={formState.comment}
                        onChange={handleChange}
                    ></textarea>
                </label>
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="conditions"
                        value={formState.conditions}
                        onChange={handleChange}
                    />Ik ga akkoord met de voorwaarden
                </label>
            </div>
            <Button
                type="submit"
                buttonName={"Verzend"}
            />
            {/*Oeps, ik ben vergeten hoe je ervoor kan zorgen dat je button niet over de hele breedte schaalt.*/}
        </form>
    </>
  )
}

export default App
