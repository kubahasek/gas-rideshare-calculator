import { useState } from "react";
import Counter from "./components/Counter";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  const [distance, setDistance] = useState("");
  const [people, setPeople] = useState("");
  const [economy, setEconomy] = useState("");
  const [price, setPrice] = useState("");
  const onPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value);
  };
  const onDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.value);
  };
  const onEconomyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEconomy(e.target.value);
  };
  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const calculate = () => {
    const econPerKm = parseFloat(economy) / 100;
    const gasUsed = econPerKm * parseFloat(distance);
    const gasPrice = gasUsed * parseFloat(price);
    const final = gasPrice / parseInt(people);
    console.log(final);

    return final;
  };
  const calculation = calculate();
  return (
    <div className="dark bg-slate-700 min-h-screen text-white flex items-center justify-center flex-col gap-4">
      <Counter value={calculation || 0} />
      <div className="flex flex-col gap-2 text-white">
        <Label htmlFor="distance" className="ml-2">
          Distance
        </Label>
        <Input
          className="w-48 bg-gray-800 border-gray-600 text-white"
          id="distance"
          value={distance}
          type="number"
          step="0.1"
          inputMode="decimal"
          onChange={(e) => onDistanceChange(e)}
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <Label htmlFor="people" className="ml-2">
          No. of people
        </Label>
        <Input
          className="w-48 bg-gray-800 border-gray-600 text-white"
          id="people"
          value={people}
          type="number"
          step="1"
          onChange={(e) => onPeopleChange(e)}
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <Label htmlFor="economy" className="ml-2">
          Economy
        </Label>
        <Input
          className="w-48 bg-gray-800 border-gray-600 text-white"
          id="economy"
          value={economy}
          type="number"
          step={!Number.isNaN(Number("0.1")) ? Number("0.1") : 1}
          onChange={(e) => onEconomyChange(e)}
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <Label htmlFor="price" className="ml-2">
          Price
        </Label>
        <Input
          className="w-48 bg-gray-800 border-gray-600 text-white"
          id="price"
          value={price}
          type="number"
          step="0.01"
          onChange={(e) => onPriceChange(e)}
        />
      </div>
    </div>
  );
}

export default App;
