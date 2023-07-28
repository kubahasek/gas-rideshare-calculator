import { useState } from "react";
import Counter from "./components/Counter";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";

function App() {
  const [distance, setDistance] = useState<number>(0);
  const [people, setPeople] = useState(0);
  const [economy, setEconomy] = useState(0);
  const [price, setPrice] = useState(0);
  const onPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(parseFloat(e.target.value) || 0);
  };
  const onDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(parseFloat(e.target.value));
  };
  const onEconomyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEconomy(parseFloat(e.target.value));
  };
  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value));
  };
  const calculate = () => {
    const econPerKm = economy / 100;
    const gasUsed = econPerKm * distance;
    const gasPrice = gasUsed * price;
    const final = gasPrice / people;
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
