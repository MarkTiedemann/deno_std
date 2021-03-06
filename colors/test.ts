// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { test } from "../testing/mod.ts";
import { assertEquals } from "../testing/asserts.ts";
import { red, bgBlue, setEnabled, getEnabled } from "./mod.ts";
import "../examples/colors.ts";

test(function singleColor(): void {
  assertEquals(red("Hello world"), "[31mHello world[39m");
});

test(function doubleColor(): void {
  assertEquals(bgBlue(red("Hello world")), "[44m[31mHello world[39m[49m");
});

test(function replacesCloseCharacters(): void {
  assertEquals(red("Hel[39mlo"), "[31mHel[31mlo[39m");
});

test(function enablingColors(): void {
  assertEquals(getEnabled(), true);
  setEnabled(false);
  assertEquals(bgBlue(red("Hello world")), "Hello world");
  setEnabled(true);
  assertEquals(red("Hello world"), "[31mHello world[39m");
});
