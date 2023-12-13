var mysql2 = require('mysql2/promise');

async function list_employees() {
  const con = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "nov17"
  });

  const [rows, fields] = await con.execute('SELECT * FROM employees');
  console.log(rows)  // rows is an Array of JS object 
  con.end();
}


list_employees()


    
 