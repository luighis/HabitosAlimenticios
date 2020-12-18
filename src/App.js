import Head from "./components/Head";
import DashboardPage from "./pages/DashboardPage";
import HabitPage from "./pages/HabitPage";
import SummaryPage from "./pages/SummaryPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Head />
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/habitos" component={HabitPage} />
        <Route exact path="/resumen" component={SummaryPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
