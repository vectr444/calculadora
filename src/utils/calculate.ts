import { OPERATIONS } from "./operations";

export function calculate(
  buttonName: string,
  accumulator: string,
  displayNumber: string
) {
  const operation = OPERATIONS[buttonName as keyof typeof OPERATIONS];
  const a = Number(accumulator);
  const b = Number(displayNumber);

  const result = operation(a, b);
  const roundedValue = Math.round(result * 100) / 100;

  return String(roundedValue);
}
