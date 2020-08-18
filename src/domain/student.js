const generateId = require("../domain/Helper/userHelper");
const NotFound = Symbol(404);

const students = [
  {
    id: generateId(),
    name: "João",
    gender: "masculino",
    born: "08/08/1984",
    team: "2A",
    course: "Engenharia Eletrica",
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: "Paulo",
    gender: "masculino",
    born: "08/08/1989",
    team: "5F",
    course: "Engenharia Computação",
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: "Paula",
    gender: "feminino",
    born: "08/08/1981",
    team: "1A",
    course: "Biologia",
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: "Mirla",
    gender: "feminino",
    born: "08/08/1990",
    team: "6A",
    course: "Engenharia Fisica",
    createdAt: new Date().toLocaleDateString()
  }
];

async function index() {
  console.table(users);
}

async function Validate(id, name, gender, born, team, course) {
  if (id === "" || name === "" || gender === "" || team === "") {
    return "invalid parameters";
  }
  return {
    id: id,
    name: name.toUpperCase(),
    gender: gendertoUpperCase(),
    born: born,
    team: team.toUpperCase(),
    course: course.toUpperCase(),
    createdAt: new Date().toLocaleDateString()
  };
}
async function create(id, name, gender, born, team, course) {
  const student = Validate(
    id,
    name,
    gender,
    born,
    team,
    courseid,
    name,
    gender,
    born,
    team,
    course
  );
  if (student === "invalid parameters") {
    return "failers insert new student";
  }
  students.push(student);
  return "success insert user";
}
async function findByPk(id) {
  const student = students.find((currentValue, index, arr) => {
    return currentValue.id === id;
  });
  return student;
}

async function getIndex(id) {
  let index = students.findIndex(element => element.id === id);
  return index === -1 ? NotFound : index;
}

async function findOne(name) {
  const student = students.find((currentValue, index, arr) => {
    return currentValue.name === name;
  });
  return student;
}

async function update(
  id,
  name = "",
  gender = "",
  class_ = "",
  course = "",
  born_date = ""
) {
  let currentIndex = await getIndex(id);
  if (currentIndex != NotFound) {
    students[currentIndex] = {
      ...students[currentIndex],
      name,
      gender,
      class_,
      course,
      born_date
    };
    return "sucess update";
  }

  return "fail update";
}

module.export = {
  getIndex,
  index,
  create,
  findByPk,
  findOne,
  destroy,
  update
};
