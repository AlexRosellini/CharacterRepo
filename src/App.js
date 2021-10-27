import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Components/Header";
import FirstPage from "./Components/FirstPage";
import Char from "./Components/Char";


function App() {
  return (
  
  <Router>
    <div className="app"> 
      <Header/>
      <Switch>
        <Route path = '/CharacterRepo/'>
          <FirstPage/>
        </Route>
        <Route exact path = '/:id'>
          <Char/>
        </Route>
      </Switch>
      
    </div>   
  </Router>
  );
}

export default App;
