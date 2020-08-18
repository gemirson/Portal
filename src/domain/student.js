const generateId = require('../domain/Helper/userHelper')

const students = [
  {
    id: generateId(),
    name: 'João',
    gender: 'masculino',
    born: '08/08/1984',
    team: '2A',
    course: 'Engenharia Eletrica',
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: 'Paulo',
    gender: 'masculino',
    born: '08/08/1989',
    team: '5F',
    course: 'Engenharia Computação',
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: 'Paula',
    gender: 'feminino',
    born: '08/08/1981',
    team: '1A',
    course: 'Biologia',
    createdAt: new Date().toLocaleDateString()
  },
  {
    id: generateId(),
    name: 'Mirla',
    gender: 'feminino',
    born: '08/08/1990',
    team: '6A',
    course: 'Engenharia Fisica',
    createdAt: new Date().toLocaleDateString()
  }
]

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
async function login(email, password) {
  const user = users.find((currentValue, index, arr) => {
    return currentValue.email === email
  })
  return user.password === password
}