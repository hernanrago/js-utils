/**
 * Calculates the Nominal Annual Rate (NAR) based on start date, initial value, and current value.
 *
 * @param {Date|string} startDate - The initial date when the investment started. Can be a Date object or a date string parsable by `new Date()`.
 * @param {number} initialValue - The initial value or principal amount invested. Must be a positive number.
 * @param {number} currentValue - The current value of the investment. Must be a positive number.
 *
 * @returns {number} The Nominal Annual Rate (NAR) as a decimal (e.g., 0.1 means 10% per year).
 *
 * @throws Will throw an error if:
 *   - `startDate` is not before the current date.
 *   - `initialValue` or `currentValue` are not positive numbers.
 */
export function calculateNominalAnnualRate(startDate, initialValue, currentValue) {
  if (!(startDate instanceof Date)) {
    startDate = new Date(startDate);
  }
  if (isNaN(initialValue) || initialValue <= 0) {
    throw new Error("initialValue must be a positive number");
  }
  if (isNaN(currentValue) || currentValue <= 0) {
    throw new Error("currentValue must be a positive number");
  }
  
  const endDate = new Date();

  const diffMs = endDate - startDate; // difference in milliseconds
  if (diffMs <= 0) {
    throw new Error("startDate must be before the current date");
  }

  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const years = diffDays / 365;

  const totalReturn = (currentValue / initialValue) - 1;

  // NAR is the simple annual nominal rate (no compounding)
  const NAR = totalReturn / years;

  return Number(NAR.toFixed(4));
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
  // Validate input
  if (!Array.isArray(cashFlows) || cashFlows.length < 2) {
    throw new Error("cashFlows must be an array with at least two values (initial and one future cash flow).");
  }
  if (!cashFlows.every(cf => typeof cf === 'number' && !isNaN(cf))) {
    throw new Error("All cash flow values must be valid numbers.");
  }

  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;

    // Calculate NPV and its derivative for current rate
    for (let t = 0; t < cashFlows.length; t++) {
      const denom = Math.pow(1 + rate, t);
      npv += cashFlows[t] / denom;
      derivative -= t * cashFlows[t] / (denom * (1 + rate));
    }

    // Check for zero derivative to avoid division by zero
    if (derivative === 0) {
      throw new Error("Derivative was zero. Cannot continue IRR calculation.");
    }

    const newRate = rate - npv / derivative;

    if (Math.abs(newRate - rate) < tolerance) {
      return newRate;
    }
    rate = newRate;
  }

  throw new Error(`IRR calculation did not converge after ${maxIterations} iterations. Try a different initial guess or check your cash flows.`);
}
