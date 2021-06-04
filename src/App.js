
import HomeScreen from './screens/Home'
import AdminScreen from './Admin/screens/Login'
import AdminHomeScreen from './Admin/screens/AdminHome'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/admin' component={AdminScreen} />
        <Route path='/adminDashboard' exact component={AdminHomeScreen} />        
      </Switch>
    </Router>

  );

}

export default App;
