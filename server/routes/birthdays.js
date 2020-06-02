const router = require('express').Router();
let Birthday = require('../models/birthday.model');

router.route('/birthdays').get((req, res) => {
  Birthday.find()
    .then((birthdays) => res.json(birthdays))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/birthday/add').post((req, res) => {
  const username = req.body.username;
  const cohort_number = req.body.cohort_number;
  const month = req.body.month;
  const date = req.body.date;

  const newBirthday = new Birthday({
    username,
    cohort_number,
    month,
    date
  });

  newBirthday
    .save()
    .then(() => res.json('Birthday added!'))
    .catch((err) => res.status(400).json('Error: + err'));
});

router.route('/birthdays/:id').get((req, res) => {
  Birthday.findById(req.params.id)
    .then((birthday) => res.json(birthday))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/birthdays/update/:id').put((req, res) => {
  Birthday.findById(req.params.id)
    .then((birthday) => {
      birthday.username = req.body.username;
      birthday.cohort_number = req.body.cohort_number;
      birthday.month = req.body.month;
      birthday.date = req.body.date;

      birthday
        .save()
        .then(() => res.json('Birthday updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/birthdays/:id').delete((req, res) => {
  Birthday.findByIdAndDelete(req.params.id)
    .then(() => res.json('Birthday deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
