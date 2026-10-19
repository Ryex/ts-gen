//! @ts-gen --lib-name promise-generics --export promise-generics --export tests/fixtures/promise-generics.d.ts

// A type parameter a promise mentions crosses the ABI as the promise's
// resolved value, so it needs `FromWasmAbi` on top of the usual bound.

export class Worker<T> {
  getProxy(): Promise<T>;
  setProxy(value: T): void;
}

export function make(): Promise<string>;
