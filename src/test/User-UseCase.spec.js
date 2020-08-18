const generateId = require('../domain/Helper/userHelper')

const users = []
let id

async function create(id, email, password, admin) {
  users.push({
    id: id,
    email: email,
    password: password,
    admin: admin,
    createdAt: new Date().toLocaleDateString()
  })
}
async function findByPk(id) {
  const user = users.find((currentValue, index, arr) => {
    return currentValue.id === id
  }
  )
  return user
}

async function login(email, password) {
  const user = users.find((currentValue, index, arr) => {
    return currentValue.email === email
  })
  return user.password === password
}

async function destroy(id) {
  const user = users.reduce((currentValue, index, arr) => {
    return currentValue.email === email
  })
}
describe('User use case', () => {
  test('genetare id', async () => {
    const generateID = generateId()
    expect(generateID).toBeTruthy()
  })
  test('create new user', async () => {
    id = generateId()
    await create(id, 'andre.ribeiro@gmail.com', 'valida_password', true)
    expect(users.length).toBeGreaterThan(0)
  })
  test('Should return undefined if id not equal', async () => {
    const id = generateId()
    const user = await findByPk(id)
    expect(user).toBeUndefined()
  })

  test('Should return user if load with id is correct ', async () => {
    const user = await findByPk(id)
    expect(user.email).toBe('andre.ribeiro@gmail.com')
  })

  test('Should return login success', async () => {
    const result = await login('andre.ribeiro@gmail.com', 'valida_password')
    expect(result).toBeTruthy()
  })
})
