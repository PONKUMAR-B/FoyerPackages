import './App.css';
import { CircularProgress } from "foyercomponents";


function App() {
  return (
    <div>
      <CircularProgress size={50} color="success" variant="determinate" value={75} />;
    </div>
  );
}

export default App;
