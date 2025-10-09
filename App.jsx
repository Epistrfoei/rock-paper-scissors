import { useState } from "react";
import HomeScreen from "./src/components/HomeScreen/homeScreen";
import "./App.css";
import GameField from "./src/components/GameField/GameField";
function App() {
  const [page, setPage] = useState(true);

  const handlePage = () => {
    setPage(!page);
  };

  return <>{page ? <HomeScreen handlePage={handlePage} /> : <GameField />}</>;
}

export default App;
