# Contributing
Contributions are always welcome, no matter how large or small. We want to ensure that this components library lives and continues to grow and evolve. The evolution of the library should never be blocked by any single person's time. If you notice a bug, functional or visual or perhaps have a potential fix, **please open an issue**.

We aim to keep all technical discussions inside GitHub issues. If you have questions about a specific PR, want to discuss a new API idea etc GitHub issues are the right place. If you have questions about how to use the library, or how the project is running - the [Slack Channel](#) is the place to go (you'll need a Government Email address).

## Contributing Code
Any contributed code needs to pass linting and tests before it can be considered for merging. Here's a quick guide:

1. Find some issue you're interested in, or a feature that you'd like to tackle. Also make sure that no one else is already working on it. We don't want you to be disappointed.

1. Fork, then clone: `git clone https://github.com/dwp/dwp-components.git`

1. Create a branch with a meaningful name for the issue: `git checkout -b fix-something`

1. Make sure that the tests still pass: `npm run test`

1. Make sure that the library still builds successfully and passes size limitation tests: `npm run build`

1. Make your changes and commit: `git add` and `npm run commit`

1. Push your branch: `git push -u origin your-branch-name`

1. Submit a pull request to the upstream dwp-components repository.

1. Choose a descriptive title and describe your changes briefly.

1. Wait for a maintainer to review your PR, make changes if it's being recommended, and get it merged.

1. Feel cool 😎

### Signing your Work
All commits contributed to this repository **must** be signed. If you don't currently have this set up, [see this guide](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work) to get started.

### Commits & Versioning
Any commits should follow the [conventional commits specification](TODO). We use a semantic release process to automatically assign version number based upon the unsentimental commits included in the release.

All commit messages should mention an issue number.

**When committing your code, run `npm run commit` to assist you with creating valid commits.**

### Changelog
When we release a new version of each library, a change log is automatically written, **don't write changes into releases yourself**.
