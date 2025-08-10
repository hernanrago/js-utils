/**
 * Calculate Nominal Annual Rate (NAR) from Effective Annual Rate (EAR).
 * @param ear - Effective Annual Rate in decimal form (e.g., 0.80 for 80%).
 * @param periodsPerYear - Number of compounding periods per year (e.g., 12 for monthly).
 * @returns Nominal Annual Rate (NAR) in decimal form.
 */
export function calculateNominalAnnualRate(ear: number, periodsPerYear: number): number;

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
