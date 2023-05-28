# Turborepo starter

A monorepo projet for the ktrust assignment

## description of the assignment

- [description](docs/assignment.md)
- [todo lits](docs/todo.md)
- [deployment](docs/deployment.md)

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages
- 'server': the backend of the assignment
- `client`: the frontend of the assignment
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Nginx](https://www.nginx.com/) for routing requests to the correct app
- [Docker Compose](https://docs.docker.com/compose/) for local development
- [Cypress](https://www.cypress.io/) for end-to-end testing
