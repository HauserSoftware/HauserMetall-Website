# HauserMetall-Website

## About

This is the future version of the hauser metall website.

## Getting Started

Install dependencies:

```bash
pnpm install
```

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Installed Tools/Technologies

This is a short list of all major tools/dependencies included in the project.

Each tool gets its own, opinionated description
which always relates to the project and the purpose of the tool for this specific project.
We are aware that these descriptions may only contain half-truths.
However, that is a sacrifice we are willing to make in favour of simplicity.

### Development

#### [Next.js](https://nextjs.org/)

Next.js is the framework which builds on React to give more developer experience
by taking care of (among others):

- Server side rendering
- Routing
- Script and Image optimizations
- ...

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

**Important files:**

- [app directory](./app)
- [next.config.mjs](next.config.mjs)

#### [Next-Intl](https://next-intl-docs.vercel.app/)

Next-intl is used for i18n. It can be used on the client and server side. See the following link on how to use it:
https://next-intl-docs.vercel.app/docs/environments/server-client-components

**Important files:**

- [i18n.ts](i18n.ts)
- [middleware.ts](middleware.ts)
- [next.config.mjs](next.config.mjs)
- [layout.tsx](app%2F%5Blocale%5D%2Flayout.tsx)

#### [Tailwind CSS](https://tailwindcss.com/)

Has been installed in conjunction with Nextjs.
It provides classes for all different css styled to easily and expressively style any React component.

Documentation and list of available classes can be found here:https://tailwindcss.com/docs

**Important files:**

- [tailwind.config.ts](tailwind.config.ts)
- [postcss.config.mjs](postcss.config.mjs)

#### [Next UI](https://nextui.org/)

NextUi is a UI library that provides pre-styled accessible components for Next.js. Usage:

1. `npm install -g nextui-cli`
2. `nextui add ${component}`

Import the component in your files and style them with Tailwind if necessary

**Important files:**

- [providers.tsx](app%2F%5Blocale%5D%2Fproviders.tsx)
- [tailwind.config.ts](tailwind.config.ts)

### Code Quality

#### [Prettier](https://prettier-doc.netlify.app/)

Prettier is a tool to automatically format your code. Prettier is also set up to format all files during the commit.

**Important files:**

- [.prettierignore](.prettierignore)
- [.prettierrc.json](.prettierrc.json)

#### [Eslint](https://eslint.org/)

Has been installed in conjunction with Nextjs with the default ruleset enabled.
It helps to keep the code clean and to learn best practices during coding.
Eslint hase been configured to run and lint every commit.

**Important files:**

- [.eslintrc.json](.eslintrc.json)

#### [Typescript](https://www.typescriptlang.org/)

Has been installed in conjunction with Nextjs.
It provides types to Javascript which really boosts developer experience and code quality.

**Important files:**

- [tsconfig.json](tsconfig.json)

### Other

#### [Semantic Release](https://github.com/semantic-release/semantic-release/tree/master)

Semantic Release is a tool that builds on the clean commit messages enforced by commitlint.
It consumes the commit messages and determines the release version based on the prefix (feat/fix/chore).
This version will then be added to the package.json and GitHub.
Furthermore, the release also creates useful release notes.

## Workflows

We use GitHub actions/workflows to ensure code quality and perform deployments.

### Dependabot

Is used to automatically create PRs for dependency updates.

**Important files**:

- [dependabot.yml](.github%2Fdependabot.yml)

### Dev workflow

During development, we first ensure on every push that:

- There are no lint errors
- There are no vulnerable dependencies
- Semantic Release Dry run to check if a release would work without actually triggering one

### Prod workflow

This workflow will run after a PR(pull request) has been merged. It will:

- Verify the code quality by doing
  - Code Linting
  - Dependency security checks
- Trigger a semantic release
