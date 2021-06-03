
import './App.css';

import HomeScreen from './screens/Home'
import AdminScreen from './Admin/screens/Login'

import { BrowserRouter as Router , Route} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/admin' exact component={AdminScreen} />
    </Router>

  );

}

export default App;
