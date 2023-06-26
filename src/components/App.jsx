import "../styles/index.scss";
import Recipes from "./Recipes";
import Sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={Sword} alt="sword" width="250px"></img>
        <img src={swordSvg} alt="swordsvg" width="250px"></img>
        <Recipes />
      </main>
    </>
  );
};

export default App;
