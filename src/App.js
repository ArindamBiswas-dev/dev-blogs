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
import Post from './components/Post/Post';
import SearchResult from './components/Search/SearchResult';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route exact={true} path="/search" component={SearchResult} />
            <Route exact={true} path="/:id/:id" component={Post} />
            <Route exact={true} path="/:id" component={Profile} />
          </Switch>
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default App;
