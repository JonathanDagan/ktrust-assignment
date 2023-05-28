describe("auth - login", () => {
  it("login", () => {
    cy.api({
      method: "POST",
      url: "/api/auth/login",
      body: {
        email: "alice@prisma.io",
        password: "alice123",
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });
});
