import { useState } from "react";
import { Header } from "./Components/header/Header";
import { MealSummary } from "./Components/meal-summary/MealSummary";
import { Meals } from "./Components/meals/Meals";
import { Basket } from "./Components/basket/Basket";
import { CardProvaider } from "./store/Card-contex";
function App() {
  const [toggle, setToggle] = useState(false);
  function ToggleHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <CardProvaider>
      <Header onToggle={ToggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket onToggle={ToggleHandler} />}
    </CardProvaider>
  );
}

export default App;
