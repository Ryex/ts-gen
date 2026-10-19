//! @ts-gen --lib-name circular-alias --export circular-alias --export tests/fixtures/circular-alias.d.ts

// The shape every bundled `.d.ts` has: the declaration is renamed and
// re-exported under its original name inside a namespace, so the alias's
// target resolves to the namespace's own export — the alias itself.
//
// The alias has no terminal type, so it is kept as written instead of
// being expanded into itself.
declare class Position {
  lineNumber: number;
}
type editor_main_Position = Position;
declare namespace editor_main {
  export { editor_main_Position as Position };
}
export { editor_main as m };
