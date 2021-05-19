import { Route, Switch } from 'react-router';
import './App.css';
import Feed from './components/Homepage/Feed/Feed';
import Week from './components/Homepage/Week/Week';
import Month from './components/Homepage/Month/Month';
import Year from './components/Homepage/Year/Year';
import TopInfinity from './components/Homepage/Infinity/TopInfinity';
import Latest from './components/Homepage/Latest/Latest';
import Layout from './components/global/Layout';
import ReadingList from './components/Reading List/ReadingList';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import New from './components/new/New';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={Feed} />
          <Route exact={true} path="/top/week" component={Week} />
          <Route exact={true} path="/top/month" component={Month} />
          <Route exact={true} path="/top/year" component={Year} />
          <Route exact={true} path="/top/infinity" component={TopInfinity} />
          <Route exact={true} path="/latest" component={Latest} />
          <Route exact={true} path="/readinglist" component={ReadingList} />
          <Route exact={true} path="/setting" component={Setting} />
          <Route exact={true} path="/new" component={New} />
          <Route exact={true} path="/:id" component={Profile} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
