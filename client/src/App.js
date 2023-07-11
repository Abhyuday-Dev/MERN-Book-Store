import React from "react";
import { BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Books from "./components/Books/Books";
import AddBooks from "./components/AddBooks/AddBooks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/addBooks" element={<AddBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
