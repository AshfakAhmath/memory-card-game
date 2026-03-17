import { GameHeader } from "./Components/GameHeader";

function App() {
  return (
    <div className="app">
      <GameHeader score={10} moves={5} />
    </div>
  )
}

export default App;
