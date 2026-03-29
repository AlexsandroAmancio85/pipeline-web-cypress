describe("Testes de Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("Deve exibir formulário de cadastro", () => {
    cy.get(".account_form").should("be.visible");
    cy.get("#user").should("exist");
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#btnRegister").should("exist");
  });

  it("Deve exibir erro quando nome não está preenchido", () => {
    cy.get("#email").type("usuario@example.com");
    cy.get("#password").type("senha123");
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo nome deve ser prenchido");
  });

  it("Deve exibir erro quando email está vazio", () => {
    cy.get("#user").type("João Silva");
    cy.get("#password").type("senha123");
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Deve exibir erro quando email é inválido", () => {
    cy.get("#user").type("João Silva");
    cy.get("#email").type("emailinvalido");
    cy.get("#password").type("senha123");
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Deve exibir erro quando senha está vazia", () => {
    cy.get("#user").type("João Silva");
    cy.get("#email").type("usuario@example.com");
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Deve exibir erro quando senha tem menos de 6 dígitos", () => {
    cy.get("#user").type("João Silva");
    cy.get("#email").type("usuario@example.com");
    cy.get("#password").type("1234");
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Deve exibir erro quando todos os campos estão vazios", () => {
    cy.get("#btnRegister").click();

    cy.get(".errorLabel#errorMessageFirstName").should("contain", "O campo nome deve ser prenchido");
  });

  it("Deve realizar cadastro com dados válidos", () => {
    cy.get("#user").type("João Silva");
    cy.get("#email").type("joao@example.com");
    cy.get("#password").type("senha123456");
    cy.get("#btnRegister").click();

    // Aguarda mensagem de sucesso (adapte conforme sua aplicação)
    cy.get("h2.swal2-title#swal2-title").should("contain", "Cadastro realizado");
  });
});
