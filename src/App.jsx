
import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import {useState} from "react";

function App() {
    const [nrOfStrawberries, setNrOfStrawberries] = useState(0);
    const [nrOfBananas, setNrOfBananas] = useState(0);
    const [nrOfApples, setNrOfApples] = useState(0);
    const [nrOfKiwis, setNrOfKiwis] = useState(0);

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
            buttonName={"Reset"}
            onClick={() => {
                setNrOfApples(0);
                setNrOfBananas(0);
                setNrOfKiwis(0);
                setNrOfStrawberries(0)}}
        />
    </>
  )
}

export default App
