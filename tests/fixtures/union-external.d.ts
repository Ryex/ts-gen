//! @ts-gen --lib-name union-external --export union-external --export tests/fixtures/union-external.d.ts

// A union that cannot be lowered to a single type is synthesised into a
// `<Name>Kind` enum. Its members are resolved while the enum is generated,
// which registers the external uses they need — those uses have to end up
// in the generated file's `use` statements.
interface Foo {
  bar(): Worker | string;
}
type editor_main_Baz = Foo;
declare namespace editor_main {
  export { editor_main_Baz as Baz };
}
export { editor_main as m };

// The same, for a type that is not in the default `web_sys` map: it is
// aliased to `JsValue` instead.
interface Bar {
  bar(): Widget | string;
}
type editor_main_Quux = Bar;
declare namespace editor_main {
  export { editor_main_Quux as Quux };
}
