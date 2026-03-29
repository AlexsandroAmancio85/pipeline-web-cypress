describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Deve exibir formulário de login", () => {
    cy.get("body").should("be.visible");
  });

  it("Deve fazer login com credenciais válidas", () => {
    cy.get("#user").type("user@example.com");
    cy.get("#password").type("password123");
    cy.get("#btnLogin").click();

    cy.get("h2.swal2-title#swal2-title").should("contain", "Login realizado");
  });

  it("Deve exibir erro quando email é inválido", () => {
    cy.get("#user").type("emailinvalido");
    cy.get("#password").type("password123");
    cy.get("#btnLogin").click();

    cy.get("span.invalid_input").should("contain", "E-mail inválido");
  });

  it("Deve exibir erro quando senha está vazia", () => {
    cy.get("#user").type("user@example.com");
    cy.get("#btnLogin").click();

    cy.get("span.invalid_input").should("contain", "Senha inválida");
  });

  it("Deve exibir erro quando senha tem menos de 6 dígitos", () => {
    cy.get("#user").type("user@example.com");
    cy.get("#password").type("1234");
    cy.get("#btnLogin").click();

    cy.get("span.invalid_input").should("contain", "Senha inválida");
  });
});
