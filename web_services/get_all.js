
function app(req, res) {
  let records = pjs.query("SELECT * FROM requests");
  res.send(records);
}

exports.default = app;