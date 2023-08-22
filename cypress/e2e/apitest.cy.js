/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const userName = faker.internet.userName();
const userEmail = faker.internet.email();
const userPassword = faker.internet.password();
let userToken;
const badToken = "xxx"

describe("Testing the server health", () => {
  it("returns the right response and status", () => {
    cy.request(
      "https://practice.expandtesting.com/notes/api/health-check"
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.equal(true);
      expect(response.body.message).to.eq("Notes API is Running");
    });
  });
});
describe("Testing user registration", () => {
  it("returns the right status, message and data", () => {
    cy.request({
      method: "POST",
      url: "https://practice.expandtesting.com/notes/api/users/register",
      headers: {
        accept: "application/json",
      },
      body: {
        name: userName,
        email: userEmail,
        password: userPassword,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("User account created successfully");
      expect(response.body.success).to.equal(true);
    });
  });
});
describe("Testing user login", () => {
  it("returns the right status, message and data", () => {
    cy.request({
      method: "POST",
      url: "https://practice.expandtesting.com/notes/api/users/login",
      headers: {
        accept: "application/json",
      },
      body: {
        email: userEmail,
        password: userPassword,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login successful");
      expect(response.body.success).to.equal(true);
      userToken = response.body.data.token;
      return userToken;
    });
  });
});

describe("Testing new note post", () => {
  beforeEach(() => {
    cy.fixture("noteData").as("notes");
  });

  it("returns the right status, message and data when posting a new note", () => {
    cy.get("@notes").then(notes => {
      notes.forEach(note => {
        cy.postNote(
          userToken,
          note.title,
          note.description,
          note.category
        ).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq("Note successfully created");
          expect(response.body.success).to.equal(true);
          expect(response.body.data.title).to.equal(note.title);
          expect(response.body.data.description).to.equal(note.description);
          expect(response.body.data.category).to.equal(note.category);
        });
      });
    });
  });
  it("returns an error when posting a new note without user authentification", () => {
    cy.get("@notes").then(notes => {
      notes.forEach(note => {
        cy.postNote(
          badToken,
          note.title,
          note.description,
          note.category
        ).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body.message).to.eq("Access token is not valid or has expired, you will need to login");
          expect(response.body.success).to.equal(false);
        });
      });
    });
  });
});
