# Git

> The stupid content tracker - Git Manpage

Developers are an interesting bunch. Each team has slightly different procedures for managing their repository. At the highest level, there are three common branching strategies

- Trunk based development
- Feature based development
- Git Flow

These workflows have more in common than not. The goal of this quick reference is to bring awareness to the commonalities and differences in these workflows. This reference also seeks to provide the user with common scenarios and uncover the underlying principles that hide beneath the common commands

## Always protect the trunk

The 'trunk' is known by a couple names. Alternative terms include 'main' and formerly 'master.' There is no real distinction between either of these aliases. They represent the 'trunk'

### What is so important about the trunk?

The trunk (or main branch) is a **shared** project history

## What am I protecting the trunk from?

The most important thing to protect the trunk from is what's called a **force push**. Not all force pushes are bad, but force pushes to main are **really bad**. The reason force pushes to main are considered bad is because they rewrite the code history on the remote server with the checked out (force pushed) copy. If you are working on a feature branch (i.e. your own branch) then may be entitled to rewrite your code history. This is because it is **your** history

Force pushing to main will rewrite the trunk's history and as a result, every checked out copy of main obsolete. This means a team of four would now need to handle at least three unique merge conflicts. This can cause significant project delays and break the CI/CD pipeline

Lower priority but equally important things to protect the trunk from are as follows

- Low code quality
	- Nonstandard formatting
	- Nonstandard linting
	- Missing type safety
	- Missing test coverage (with justifiable exceptions)
	- Incomplete build and distribution
	- ...
- Code weaknesses
    - Weak encryption
    - Insufficient randomness
    - Information exposure
    - ...
- Code vulnerabilities
    - Injection
    - Cross Site Scripting (XSS)
    - Broken Authentication
    - ...

This list is non-exhaustive. Yet this list alone warrants automated tooling to help protect the trunk. Because low code quality introduces weaknesses, and weaknesses introduce vulnerabilities, the rule of thumb is "never sacrifice on quality"

## How to protect the trunk

Depending on your branching workflow, you may protect the trunk in different ways. To add to the complexity, code repository hosting platforms vary in offered protection mechanisms. For any workflow, disabling force pushes to main in your project settings is a sane baseline. Automated formatters and linters are language specific, and protect the **quality** of the trunk. Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) tools can protect the trunk from **weaknesses** and **vulnerabilities**

## Links

- [Git Reference](https://git-scm.com/docs)
- [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

## See also

- [A Hacker's Guide to Git](https://wildlyinaccurate.com/a-hackers-guide-to-git/)
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [GUI Clients](https://git-scm.com/downloads/guis)
- [Pro Git ("Git Book")](https://git-scm.com/book/en/v2)
- [PyGit: Just enough ...](https://benhoyt.com/writings/pygit/)
- [Trunk-Based Development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)
- [Why Pull Requests Are A BAD IDEA](https://www.youtube.com/watch?v=ASOSEiJCyEM) (the golden horizon)
