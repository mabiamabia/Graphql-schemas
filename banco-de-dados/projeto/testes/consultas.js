const db = require("../config/db");

// db("perfis")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db("perfis")
//   .select("nome", "id")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db.select("nome", "id")
//   .from("perfis")
//   .limit(4)
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

//filtras as linhas da tabela:

db("perfis")
  .where({ id: 2 })
  .first()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
