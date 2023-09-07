import { twMerge } from "tailwind-merge";
export function Test() {
  const className = twMerge("flex");

  return (
    <div className={className}>
      <h1 data-testid="test-page">TEST PAGE</h1>
      <p>test ~~</p>
    </div>
  );
}
