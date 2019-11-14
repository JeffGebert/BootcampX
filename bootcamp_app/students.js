let month = process.argv[2];
let limit = process.argv[3];
const values = [`%${month}%`, limit];

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`,values)
.then(res => {
  for (let x = 0; x <res.rows.length; x++) {
    console.log(res.rows[x].name + " has an id of " + res.rows[x].student_id + " and was in the " + res.rows[x].cohort + " cohort")
  }
})
.catch(err => console.error('query error', err.stack));

