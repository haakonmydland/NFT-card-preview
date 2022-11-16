import { useState } from "react";
import Card from "./Card";
import image from "./assets/image-equilibrium.jpg";
import creatorImage from "./assets/avatar.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card
        image={image}
        title="Equilibrium #3429"
        href="https://github.com/haakonmydland"
        text="Our Equilibrium collection promotes balance and calm"
        price="0.041"
        time="3 days"
        creator={{
          name: "Haakon Mydland",
          img: creatorImage,
          href: "https://github.com/haakonmydland",
        }}
      />
      <Card
        image={image}
        title="Equilibrium #3429"
        href="https://github.com/haakonmydland"
        text="Our Equilibrium collection promotes balance and calm"
        price="0.041"
        time="3 days"
        creator={{
          name: "Haakon Mydland",
          img: creatorImage,
          href: "https://github.com/haakonmydland",
        }}
      />
      <Card
        image={image}
        title="Equilibrium #3429"
        href="https://github.com/haakonmydland"
        text="Our Equilibrium collection promotes balance and calm"
        price="0.041"
        time="3 days"
        creator={{
          name: "Haakon Mydland",
          img: creatorImage,
          href: "https://github.com/haakonmydland",
        }}
      />
    </div>
  );
}

export default App;
