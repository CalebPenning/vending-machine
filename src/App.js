import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Water from './Components/Water/Water';
import VendingMachine from './Components/VendingMachine';
import Candy from './Components/Candy/Candy';
import Soda from './Components/Soda/Soda';
import './App.css';

const App = () => (
    <div>
        <BrowserRouter>
        <nav>
          <NavLink className="HomeButton" exact to="/">
            Vending Machine
          </NavLink>
          <NavLink className="NotHome Soda" exact to="/soda">Soda</NavLink>
          <NavLink className="NotHome Candy" exact to ="/candy">Candy</NavLink>
          <NavLink className="NotHome Drink" exact to="/water">Water</NavLink>
        </nav>
            <Route exact path="/">
              <VendingMachine />
            </Route>
            <Route exact path="/soda">
              <Soda />
            </Route>
            <Route exact path="/candy">
              <Candy />
            </Route>
            <Route exact path="/water">
              <Water />
            </Route>
        </BrowserRouter>
    </div>
)
export default App;
