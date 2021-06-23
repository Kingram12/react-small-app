import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

//react router - BrowserRouter is a component - then Route is also a component - Route component is to define diff paths and which component to show

function App() {
  return <div id="root">
    <MainNavigation/>
<Switch>
<Route path="/" exact={true}><AllMeetupsPage/></Route>
  <Route path="/new-meetup"><NewMeetupPage/></Route>
  <Route path="/favorites"><FavoritesPage/></Route>
</Switch>
  </div>;
}

export default App;
