const db = require("../config/db");

// excluir por id
// db("usuarios")
//   .where({ id: 1 })
//   .delete()
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// created_at
// updated_att
// deleted_at

//excluir tudo
db("usuarios")
  .delete()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
