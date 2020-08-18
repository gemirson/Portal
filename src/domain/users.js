const generateId = require("../domain/Helper/userHelper");
const NotFound = Symbol(404);

const users = [
  {
    id: generateId(),
    email: "joão.moguel@gmail.com",
    senha: "valida_password",
    admin: true
  },
  {
    id: generateId(),
    email: "paulo.vilar@gmail.com",
    senha: "valida_password",
    admin: true
  },
  {
    id: generateId(),
    email: "marcio.cabral@gmail.com",
    senha: "valida_password",
    admin: true
  },
  {
    id: generateId(),
    email: "marcio.ribeiro@gmail.com",
    senha: "valida_password",
    admin: true
  }
];

async function getIndex(id) {
  let index = users.findIndex(element => element.id === id);
  return index === -1 ? NotFound : index;
}

async function index() {
  console.table(users);
}

async function create(id, email, password, admin) {
  users.push({
    id: id,
    email: email,
    senha: password,
    admin: admin,
    createdAt: new Date().toLocaleDateString()
  });
}
async function findByPk(id) {
  const user = users.find((currentValue, index, arr) => {
    return currentValue.id === id;
  });
  return user;
}

async function findOne(email) {
  const user = users.find((currentValue, index, arr) => {
    return currentValue.email === email;
  });
  return user;
}

async function update(id, email = "", senha = "", admim = "") {
  let currentIndex = await getIndex(id);
  if (currentIndex != NotFound) {
    students[currentIndex] = {
      ...students[currentIndex],
      email,
      senha,
      admim
    };
    return "sucess update";
  }

  return "fail update";
}

async function destroy(id) {
  currentIndex = getIndex(id);
  if (currentIndex !== NotFound) {
    users.splice(currentIndex, 1);
    return "success delete users";
  }
  return "failers delete user";
}

async function login(email, password) {
  const user = users.find((currentValue, index, arr) => {
    console.log(currentValue);
    return currentValue.email === email;
  });
  console.log(user);
  if (user) {
    return user.senha === password
      ? "login realizado com sucesso"
      : "falha no login: usuario ou senha incorreto";
  }
  return "falha no login: usuario ou senha incorreto";
}

module.exports = {
  getIndex,
  index,
  create,
  findByPk,
  login,
  findOne,
  destroy,
  update,
  users
};
