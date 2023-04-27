import logo from './logo.svg';
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
    </div>
  );
}

export default App;
