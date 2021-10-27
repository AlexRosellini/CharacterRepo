import FirstPage from "./Components/FirstPage";
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Char from "./Components/Char";


function App() {
  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path = '/'>
          <FirstPage/>
        </Route>
        <Route exact path = '/:id'>
          <Char/>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
