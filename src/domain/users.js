const users = [
  {
    id: 1,
    email: 'joão.moguel@gmail.com',
    senha: 'valida_password',
    admin: true
  },
  {
    id: 2,
    email: 'paulo.vilar@gmail.com',
    senha: 'valida_password',
    admin: true
  },
  {
    id: 3,
    email: 'marcio.cabral@gmail.com',
    senha: 'valida_password',
    admin: true
  },
  {
    id: 4,
    email: 'andre.ribeiro@gmail.com',
    senha: 'valida_password',
    admin: true
  }
]

async function create(id, email, password, admin) {
  users.push({
    id: id,
    email: 'andre.ribeiro@gmail.com',
    senha: 'valida_password',
    admin: true,
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
