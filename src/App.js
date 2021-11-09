import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/vendor/nucleo/css/nucleo.css";
import "../src/styles/vendor/font-awesome/css/font-awesome.min.css";
import "../src/styles/argon-design-system-react.css";
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
