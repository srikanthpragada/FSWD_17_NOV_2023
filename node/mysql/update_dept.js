var {con} = require("./util")


con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "update departments  set dept_name  = ? where dept_id = ?",
    ['Department 10', 'd1'],
    function (err, result) {
      if (err) throw err;
      console.log(result)
      // console.log("Updated %d rows", result.affectedRows)
      con.end()
    }
  );
}
);
 