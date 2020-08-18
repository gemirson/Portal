const generateId = require("../domain/Helper/userHelper");
const User = require("../domain/users");

let id;

describe("User use case", () => {
  test("genetare id", async () => {
    const generateID = generateId();
    expect(generateID).toBeTruthy();
  });
  test("create new user", async () => {
    id = generateId();
    await User.create(id, "andre.ribeiro@gmail.com", "valida_password", true);
    expect(User.users.length).toBeGreaterThan(0);
  });
  test("Should return undefined if id not equal", async () => {
    const id = generateId();
    const user = await User.findByPk(id);
    expect(user).toBeUndefined();
  });

  test("Should return user if load with id is correct ", async () => {
    const user = await User.findByPk(id);
    expect(user.email).toBe("andre.ribeiro@gmail.com");
  });

  test("Should return login success", async () => {
    const result = await User.login(
      "andre.ribeiro@gmail.com",
      "valida_password"
    );
    expect(result).toBe("login realizado com sucesso");
  });

  test("Should return login fails", async () => {
    const result = await User.login(
      "jose.ribeiro@gmail.com",
      "valida_password"
    );
    expect(result).toBe("falha no login: usuario ou senha incorreto");
  });

  test("Should remove item by id", async () => {
    await User.create(
      generateId(),
      "paulo.ribeiro@gmail.com",
      "valida_password",
      true
    );
    const result = await User.destroy(id);
    expect(result).toBeTruthy();
  });

  test("Should getAll users ", async () => {
    const result = await User.index();
    expect(result).toBe(User.users);
  });
});
