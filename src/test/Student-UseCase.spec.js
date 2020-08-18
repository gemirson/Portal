const generateId = require("../domain/Helper/userHelper");
const NotFound = Symbol(404);

const students = [];
let id;

async function getIndex(id) {
  let index = students.findIndex(element => element.id === id);
  return index === -1 ? NotFound : index;
}

async function create(id, name, gender, born, team, course = "course") {
  students.push({
    id: id,
    name: name,
    gender: gender,
    born: born,
    team: team,
    course: course,
    createdAt: new Date().toLocaleDateString()
  });
}
async function findByPk(id) {
  const student = students.find((currentValue, index, arr) => {
    return currentValue.id === id;
  });
  return student;
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

describe("Student use case", () => {
  test("genetare id", async () => {
    const generateID = generateId();
    expect(generateID).toBeTruthy();
  });
  test("create new student", async () => {
    id = generateId();
    await create(
      id,
      "andre ribeiro",
      "masculino",
      "1986-08-20",
      "2A",
      "Engenharia Eletrica"
    );
    expect(students.length).toBeGreaterThan(0);
  });
  test("Should return undefined if id not equal", async () => {
    const id = generateId();
    const student = await findByPk(id);
    expect(student).toBeUndefined();
  });

  test("Should return student if load with id is correct ", async () => {
    const student = await findByPk(id);
    expect(student.name).toBe("andre ribeiro");
  });

  test("Should return student if load with name is correct ", async () => {
    const student = await findOne("andre ribeiro");
    expect(student.id).toBe(id);
  });

  test("Should edit student", async () => {
    const newId = generateId();
    await create(
      newId,
      "Jose ribeiro",
      "masculino",
      "1986-08-20",
      "2A",
      "Engenharia Eletrica"
    );
    result = await update(
      newId,

      "João ribeiro",
      "masculino",
      "1986-08-20",
      "2A",
      "Engenharia Eletrica",
      new Date().toLocaleDateString()
    );

    expect(result).toBe("sucess update");
  });
});
