const superTest = require("supertest");
const expect = require("chai").expect;

const baseUrl = 'http://127.0.0.1:3000/api';
const api = superTest(baseUrl);

describe("GET /iecho", function () {
  it("returns reversed word, and palindrome false", async function () {
    const response = await api.get("/iecho?text=hola").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql('aloh');
    expect(response.body.palindrome).to.eql(false);
  });
});

describe("GET /iecho", function () {
  it("returns reversed word, and palindrome true", async function () {
    const response = await api.get("/iecho?text=oso").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql('oso');
    expect(response.body.palindrome).to.eql(true);
  });
});

describe("GET /iecho", function () {
  it("returns reversed words, and palindrome true", async function () {
    const response = await api.get("/iecho?text=oso oso").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.text).to.eql('oso oso');
    expect(response.body.palindrome).to.eql(true);
  });
});

describe("GET /iecho", function () {
  it("returns no text, cause no text", async function () {
    const response = await api.get("/iecho").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.error).to.eql('no text');
  });
});

describe("GET /iecho", function () {
  it("returns no text, cause empty text", async function () {
    const response = await api.get("/iecho?text=").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.error).to.eql('no text');
  });
});

describe("GET /iecho", function () {
  it("returns no text, cause array os text", async function () {
    const response = await api.get("/iecho?text=hola&text=adios").then(res => res);

    expect(response.status).to.eql(200);
    expect(response.body.error).to.eql('no text');
  });
});