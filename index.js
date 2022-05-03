import { connection, sqlStr, insert_data } from './components/mysql-config.js';

connection.query(sqlStr, insert_data, (err, results) => {
  if (err) throw err;
  if (results.affectedRows === 1) {
    console.log('success');
  }
});

connection.end();
