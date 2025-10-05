# Contributing Guidelines

Thanks for considering contributing to this project! 🎉  
This document outlines the setup process, coding standards, and commit conventions we follow to keep the codebase clean and consistent.

---

## 🛠️ Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/) as the package manager
- Git installed and configured

### Install Dependencies

At the root of the repo:

```bash
pnpm install
```

This installs dependencies for both `client/` and `server/` workspaces.

### Running the Project

To start both client and server together:

```bash
pnpm dev
```

- Client runs on: `http://localhost:5173`
- Server runs on: `http://localhost:5000`

---

## 🧑‍💻 Coding Standards

- **Frontend**: React + Tailwind CSS (v4)
- **Backend**: Node.js + Express + MongoDB
- **Linting**: ESLint + Prettier (auto‑fix on commit via lint‑staged)
- **Folder Structure**: Keep `client/` and `server/` self‑contained.
- **Documentation**: Update README or inline comments when adding new features.

---

## 📝 Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.  
Format:

```
<type>(optional scope): <short summary>
```

### Allowed Types

- **feat**: A new feature
- **fix**: A bug fix
- **chore**: Maintenance, tooling, dependencies
- **docs**: Documentation only
- **style**: Code style changes (no logic)
- **refactor**: Code restructuring without behavior change
- **test**: Adding or updating tests
- **perf**: Performance improvements
- **ci**: CI/CD config changes
- **build**: Build system or dependency changes

### Rules

- Use **lowercase** for type and scope.
- Keep subject line ≤ 72 characters.
- Use **imperative mood** (“add feature” not “added feature”).
- Scope is optional but recommended (`feat(client): ...`).

### Examples

✅ Good:

```
feat(server): add agent CRUD routes
fix(client): resolve navbar flicker on route change
chore: setup eslint + prettier configs
```

🚫 Bad:

```
update stuff
final commit
Bug fix
```

---

## 🔄 Git Hooks

We use **Husky** + **Commitlint** + **lint-staged**:

- `pre-commit`: runs ESLint + Prettier on staged files
- `commit-msg`: validates commit messages against the convention

If your commit fails, fix the issues and try again.

---

## 🙌 How to Contribute

1. Fork the repo and create a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make your changes.
3. Ensure linting and tests pass:
   ```bash
   pnpm lint
   pnpm test
   ```
4. Commit using the proper convention.
5. Push and open a Pull Request.

---

Thanks for helping us keep this project clean, consistent, and future‑proof! 🚀
