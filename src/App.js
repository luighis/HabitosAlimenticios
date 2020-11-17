import Head from './components/Head';
import DashboardPage from './pages/DashboardPage';
import HabitosPage from './pages/HabitosPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Head/>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/HabitosPage" component={HabitosPage} />
          <Redirect to="/" />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
