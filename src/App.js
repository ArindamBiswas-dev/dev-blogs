import { Route, Switch } from 'react-router';
import './App.css';
import Feed from './components/Homepage/Feed/Feed';
import Week from './components/Homepage/Week/Week';
import Month from './components/Homepage/Month/Month';
import Year from './components/Homepage/Year/Year';
import TopInfinity from './components/Homepage/Infinity/TopInfinity';
import Latest from './components/Homepage/Latest/Latest';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/top/week" component={Week} />
        <Route exact path="/top/month" component={Month} />
        <Route exact path="/top/year" component={Year} />
        <Route exact path="/top/infinity" component={TopInfinity} />
        <Route exact path="/latest" component={Latest} />
      </Switch>
    </div>
  );
}

export default App;
