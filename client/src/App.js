import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import BirthdayList from './Components/BirthdayList';
import EditBirthday from './Components/EditBirthday';
import CreateBirthday from './Components/CreateBirthday';

function App() {
  return (
    // When you edit or delete a birthday, the page will be reloaded with the updated data
    <Router forceRefresh={true}>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/edit/:id" component={EditBirthday} />
        <Route path="/create" component={CreateBirthday} />
        <Route path="/" exact component={BirthdayList} />
      </div>
    </Router>
  );
}

export default App;
