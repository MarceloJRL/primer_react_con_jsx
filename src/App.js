import "./styles.css";
//import Lista from "./Lista";
const Lista = () => {
  return (
    <lu>
      <li>Learn React</li>
      <li>Climb Mt.Everest</li>
      <li>Rum a marathon</li>
      <li>Feed the dogs</li>
    </lu>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things i need to do:</h2>

      <Lista />
    </div>
  );
}
