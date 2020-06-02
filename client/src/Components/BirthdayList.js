import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState(['']);

  const Birthday = (props) => (
    <tr>
      <td>{props.birthday.username}</td>
      <td>{props.birthday.cohort_number}</td>
      <td>{props.birthday.month}</td>
      <td>{props.birthday.date}</td>
      <>
        <Link to={'/edit/' + props.birthday._id}>edit</Link> | onClick=
        {() => {
          props.deleteBirthday(props.birthday._id);
        }}
      </>
    </tr>
  );

  useEffect(() => {
    axios
      .get('/birthdays')
      .then((response) => {
        setBirthdays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBirthday = (id) => {
    axios.delete('/birthdays' + id).then((res) => console.log(res.data));
    setBirthdays(birthdays.filter((el) => el._id !== id));
  };

  const birthdayList = () => {
    return birthdays.map((currentbirthday) => {
      return (
        <Birthday
          birthday={currentbirthday}
          deleteBirthday={deleteBirthday}
          key={currentbirthday._id}
        />
      );
    });
  };

  return (
    <div>
      <div>
        <h3>All Birthdays</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Cohort Number</th>
              <th>Month</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{birthdayList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BirthdayList;
