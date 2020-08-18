const generateId = require('../domain/Helper/userHelper')

const students = []
let id

async function create(id, name, gender, born, team, course) {
  students.push({
    id: id,
    name: name,
    gender: gender,
    born: born,
    team: team,
    course: course,
    createdAt: new Date().toLocaleDateString()
  })

  console.log(new Date().toLocaleDateString())
}
async function findByPk(id) {
  const student = students.find((currentValue, index, arr) => {
    return currentValue.id === id
  }
  )
  return student
}
describe('Student use case', () => {
  test('genetare id', async () => {
    const generateID = generateId()
    expect(generateID).toBeTruthy()
  })
  test('create new student', async () => {
    id = generateId()
    await create(id, 'andre ribeiro', 'masculino', '1986-08-20', '2A', 'Engenharia Eletrica')
    expect(students.length).toBeGreaterThan(0)
  })
  test('Should return undefined if id not equal', async () => {
    const id = generateId()
    const student = await findByPk(id)
    expect(student).toBeUndefined()
  })

  test('Should return student if load with id is correct ', async () => {
    const student = await findByPk(id)
    expect(student.name).toBe('andre ribeiro')
  })
})
