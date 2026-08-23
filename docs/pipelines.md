# M3 Glass delivery pipelines

## Pull request

```text
Pull request
    |
    v
Install pnpm + dependencies
    |
    v
Nx affected quality checks
    |
    +--> format
    +--> lint
    +--> typecheck
    +--> tests
    |
    v
Build affected projects
    |
    +--> Docs preview artifact
```

## Main branch

```text
Push to main
    |
    v
CI quality gates
    |
    v
Production documentation build
    |
    v
Deployment artifact
    |
    v
Hosting provider (to be connected)
```

## Workflow files

- `.github/workflows/ci.yml` — quality and affected-project validation
- `.github/workflows/docs-preview.yml` — pull-request documentation preview artifact
- `.github/workflows/deploy-docs.yml` — production documentation build and deployment stage scaffold

The deployment workflow intentionally stops after producing a verified production artifact until a hosting provider is selected.
