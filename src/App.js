import logo from './logo.svg';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Popular from './components/Popular/Popular';
import LocationList from './components/LocationList/LocationList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      {/* <Popular /> */}
      <LocationList />
    </div>
  );
}

export default App;
