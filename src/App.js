import { Route, Routes } from 'react-router-dom';
import { About } from './test/About';
import './App.css';
import { Home } from './test/Home';
import Burger from './lib/components/Burger';

function App() {
  const links = [
    { to: "/", title: "home" },
    { to: "/about", title: "about" }
  ]
  return (
    <div className="App">
      <div className="header">
        logo
        <Burger
          links={links}
          navbarMarginTop="50px"
          navbarBckg="goldenrod"
          activeLinkBckg="pink"
          linkTextColor="red" />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
