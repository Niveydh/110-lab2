import { describe, it, expect } from "vitest";
import { guests } from "./guest";

describe("guests", () => {
  it("should have at least 3 guests", () => {
    expect(guests.length).toBeGreaterThanOrEqual(3);
  });
});