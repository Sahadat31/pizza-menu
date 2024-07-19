import pizzaData from "../data";
import Pizza from "./Pizza";
export default function Menu() {
    return <main className="menu">
        <h2>Our Special Menu</h2>
        <ul className="pizzas">
            {pizzaData.map(pizza=><Pizza pizzObj={pizza} key={pizza.name}></Pizza>)}
        </ul>
    </main>
}