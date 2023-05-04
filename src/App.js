import { Header } from "./Components/header/Header";
import { MealSummary } from "./Components/meal-summary/MealSummary";
import { Meals } from "./Components/meals/Meals";
// import {MealsItem} from './Components/meals/MealsItem'
function App() {
  return (
    <div className="App">
      <Header />
      <MealSummary />
      <Meals />
    </div>
  );
}

export default App;
