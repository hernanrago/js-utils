/**
 * Calculate Nominal Annual Rate (NAR) from Effective Annual Rate (EAR).
 * @param {number} ear - Effective Annual Rate in decimal form (e.g., 0.80 for 80%).
 * @param {number} periodsPerYear - Number of compounding periods per year (e.g., 12 for monthly).
 * @returns {number} - Nominal Annual Rate (NAR) in decimal form.
 */
export function calculateNominalAnnualRate(ear, periodsPerYear) {
  if (periodsPerYear <= 0) throw new Error("Periods per year must be > 0");
  return periodsPerYear * (Math.pow(1 + ear, 1 / periodsPerYear) - 1);
}

/**
 * Calculate Internal Rate of Return (IRR) for a series of cash flows.
 * Uses Newton-Raphson iteration.
 * @param {number[]} cashFlows - Array of cash flows, where index 0 is the initial investment (usually negative).
 * @param {number} [guess=0.1] - Initial guess for IRR (default 10%).
 * @param {number} [maxIterations=1000] - Maximum number of iterations.
 * @param {number} [tolerance=1e-7] - Convergence tolerance.
 * @returns {number} - IRR in decimal form.
 */
export function calculateIRR(cashFlows, guess = 0.1, maxIterations = 1000, tolerance = 1e-7) {
  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      npv += cashFlows[t] / Math.pow(1 + rate, t);
      derivative -= t * cashFlows[t] / Math.pow(1 + rate, t + 1);
    }

    const newRate = rate - npv / derivative;
    if (Math.abs(newRate - rate) < tolerance) return newRate;
    rate = newRate;
  }

  throw new Error("IRR calculation did not converge");
}
