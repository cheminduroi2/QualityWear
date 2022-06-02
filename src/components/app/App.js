import Home from '../home/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faShoppingBag, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faUser, faShoppingBag, faEnvelope);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
