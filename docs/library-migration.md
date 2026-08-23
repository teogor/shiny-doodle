# Library migration manifest

Migrated from `library_src(1).zip` into the M3 Glass monorepo while preserving the source component family structure.

## Component families

- `components/actions/` — 8 components
- `components/containment/` — 7 components
- `components/feedback/` — 5 components
- `components/inputs/` — 10 components
- `components/navigation/` — 8 components
- `components/overlays/` — 6 components
- `components/web-adapted/` — 11 components
- `components/shared/` — original shared utilities

Total component files: **55**.

## Mapping

`library/src/components/*` → `packages/react/src/components/*`

`library/src/styles/*` → `packages/styles/src/*`

`library/src/theme/*` → `packages/theme/src/*`

The component files remain one component per file with the original family directories and filenames. No family-level component consolidation is used.
