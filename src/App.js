import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:term">
            <h1>Search Page</h1>
          </Route>
          <Route path="/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;