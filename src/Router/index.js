import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../Components/Login';
import Notes from '../Components/Notes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;