process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");

const db = require("../fakeDb");

const testItem = { name: "silly", price: 200 };

beforeEach(async () => {
  db.items.push(testItem);
});

afterEach(async () => {
  db.items = [];
});

/** GET /items - returns `{items: [item, ...]}` */

describe("GET /items", function () {
  test("Gets a list of items", async function () {
    const response = await request(app).get(`/items`);
    expect(response.body).toEqual({ items: [testItem] });
  });
});


/** GET /items/[name] - return data about one item: `{item: item}` */

describe("GET /items/:name", function () {
  test("Gets a single item", async function () {
    const response = await request(app).get(`/items/${testItem.name}`);
    expect(response.body).toEqual({ item: testItem });
  });

  test("Responds with 404 if can't find item", async function () {
    const response = await request(app).get(`/items/not-there`);
    expect(response.statusCode).toEqual(404);
  });
});


/** POST /items - create item from data; return `{item: item}` */

describe("POST /items", function () {
  test("Creates a new item", async function () {
    const response = await request(app)
        .post(`/items`)
        .send({ name: "Taco", price: 0 });
    expect(response.body).toEqual({ item: { name: "Taco", price: 0 } });
  });
});
