import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:term">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
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