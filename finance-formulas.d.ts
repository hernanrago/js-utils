/**
 * Calculates the Nominal Annual Rate (NAR) based on start date, initial value, and current value.
 *
 * @param startDate - The initial date when the investment started. Can be a Date object or a date string parsable by `new Date()`.
 * @param initialValue - The initial value or principal amount invested. Must be a positive number.
 * @param currentValue - The current value of the investment. Must be a positive number.
 *
 * @returns The Nominal Annual Rate (NAR) as a decimal (e.g., 0.1 means 10% per year).
 *
 * @throws Will throw an error if:
 *   - `startDate` is not before the current date.
 *   - `initialValue` or `currentValue` are not positive numbers.
 */
export function calculateNominalAnnualRate(
  startDate: Date | string,
  initialValue: number,
  currentValue: number
): number;

/**
 * Calculate Internal Rate of Return (IRR) for a series of cash flows.
 * Uses Newton-Raphson iteration.
 * @param cashFlows - Array of cash flows, where index 0 is the initial investment (usually negative).
 * @param guess - Initial guess for IRR (default 10%).
 * @param maxIterations - Maximum number of iterations.
 * @param tolerance - Convergence tolerance.
 * @returns IRR in decimal form.
 */
export function calculateIRR(
  cashFlows: number[], 
  guess?: number, 
  maxIterations?: number, 
  tolerance?: number
): number;
