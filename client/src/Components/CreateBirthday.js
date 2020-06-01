import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreateBirthday = () => {
  const [username, setUsername] = useState('');
  const [cohort_number, setCohort_number] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  let history = useHistory();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeCohort_number = (e) => {
    setCohort_number(e.target.value);
  };

  const changeMonth = (e) => {
    setMonth(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const birthday = {
      username: username,
      cohort_number: cohort_number,
      month: month,
      date: date
    };
    console.log(birthday);
    axios
      .post('http://localhost:5000/birthdays/add', birthday)
      .then((res) => console.log(res.data));
    history.push('/');
  };

  return (
    <div>
      <div>
        <h3>Create New Birthday</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              defaultValue={username}
              onChange={changeUsername}
            />
          </div>
          <div className="form-group">
            <label>Cohort Number: </label>
            <input
              type="text"
              required
              className="form-control"
              defaultValue={cohort_number}
              onChange={changeCohort_number}
            />
          </div>
          <div className="form-group">
            <label>Month: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={month}
              onChange={changeMonth}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={date}
              onChange={changeDate}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBirthday;
