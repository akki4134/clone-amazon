
import './App.css';

import HomeScreen from './screens/Home'
import AdminScreen from './Admin/screens/Login'

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/admin' exact component={AdminScreen} />
      </Switch>
    </Router>

  );

}

export default App;
