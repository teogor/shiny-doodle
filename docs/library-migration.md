# Library migration manifest

Migrated from `library_src(1).zip` into `@m3-glass/react`.

## Actions
- `M3Button`
- `M3ButtonGroup`
- `M3ExtendedFab`
- `M3Fab`
- `M3FabMenu`
- `M3IconButton`
- `M3SegmentedButton`
- `M3SplitButton`

## Containment
- `M3Accordion`
- `M3Card`
- `M3Carousel`
- `M3Container`
- `M3Divider`
- `M3InlineCard`
- `M3ListItem`

## Feedback
- `M3Badge`
- `M3Progress`
- `M3Skeleton`
- `M3Snackbar`
- `M3StateLayer`

## Inputs
- `M3Checkbox`
- `M3Chip`
- `M3DatePicker`
- `M3Dropdown`
- `M3Input`
- `M3RadioButton`
- `M3SearchField`
- `M3Slider`
- `M3Switch`
- `M3TimePicker`

## Navigation
- `M3BottomAppBar`
- `M3DockedToolbar`
- `M3NavigationBar`
- `M3NavigationDrawer`
- `M3NavigationRail`
- `M3SearchTopAppBar`
- `M3Tabs`
- `M3TopAppBar`

## Overlays
- `M3BottomSheet`
- `M3Dialog`
- `M3Menu`
- `M3Popover`
- `M3SideSheet`
- `M3Tooltip`

## Web-adapted
- `M3AudioPlayer`
- `M3CodeBlock`
- `M3ColorPicker`
- `M3CommandPalette`
- `M3ComparisonSlider`
- `M3DataGrid`
- `M3EmptyState`
- `M3KeyboardShortcut`
- `M3StatCard`
- `M3Timeline`
- `M3TreeViewer`

Total component source files migrated: **55**.

The source was consolidated by component family under `packages/react/src/migrated/` while preserving the original component names, props, visual-class contracts, and optical classifications. Internal source-only imports were adapted to the new package layout.
