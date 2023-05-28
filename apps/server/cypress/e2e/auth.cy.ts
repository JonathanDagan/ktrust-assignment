describe("auth - login", () => {
  it("login", () => {
    cy.api({
      method: "POST",
      url: "/api/users/login",
      body: {
        user: {
          email: "alice@prisma.io",
          password: "alice123",
        }
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });
});
