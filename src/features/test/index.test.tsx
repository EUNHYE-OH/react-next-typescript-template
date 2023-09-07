import { cleanup, render } from "@testing-library/react";
import { Test } from "@/features/test/index";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";

afterEach(cleanup);
describe("Test", () => {
  it("renders a heading", async () => {
    const { getByText } = await render(<Test />);
    const header = getByText("TEST PAGE");
    expect(header).toBeDefined();
  });
});
