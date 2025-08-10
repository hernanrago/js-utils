# js-utils

A collection of reusable JavaScript utilities and snippets for personal and professional projects.

This repository is designed to centralize helpers, small modules, and patterns that are commonly needed across multiple apps or experiments.

## 📁 Structure

Each module or group of utilities lives in its own subfolder:

    js-utils/
    ├── invertironline/
    │   ├── auth.js         # Token management for the InvertirOnline API
    │   └── README.md
    ├── finance-formulas.js # Financial calculation utilities (IRR, NAR, etc.)
    ├── ...

More utilities can be added as needed. The idea is to keep code modular and organized by domain or usage.

## 🚀 Usage

You can clone or copy parts of this repo as needed:

    git clone https://github.com/your-username/js-utils.git

Or use specific modules in other projects:

    import { getToken } from './path-to/js-utils/invertironline/auth.js';

    const token = await getToken();

> By default, `auth.js` uses environment variables `IOL_USERNAME` and `IOL_PASSWORD`.  
> You can also pass credentials explicitly:  
> `getToken({ username: 'youruser', password: 'yourpass' })`.

## 📦 Optional: Use as a Git-based package

If you're using this repo often across different projects, you can install it as a dependency:

    npm install git+https://github.com/your-username/js-utils.git

Then import modules like this (with ESM support):

    import { getToken } from 'js-utils/invertironline/auth.js';
    import { calculateIRR, calculateNominalAnnualRate } from 'js-utils/finance-formulas.js';

## 💰 Finance Formulas

The `finance-formulas.js` module provides financial calculation utilities:

```javascript
import { calculateIRR, calculateNominalAnnualRate } from 'js-utils/finance-formulas.js';

// Calculate Internal Rate of Return
const cashFlows = [-1000, 300, 400, 500]; // Initial investment + returns
const irr = calculateIRR(cashFlows);
console.log(`IRR: ${(irr * 100).toFixed(2)}%`);

// Calculate Nominal Annual Rate from Effective Annual Rate
const ear = 0.80; // 80% effective annual rate
const periodsPerYear = 12; // Monthly compounding
const nar = calculateNominalAnnualRate(ear, periodsPerYear);
console.log(`NAR: ${(nar * 100).toFixed(2)}%`);
```

> Note: May require custom path resolution depending on your bundler (e.g. Vite, Webpack).

## 🧩 Contributing / Extending

Feel free to expand the utility set with:

- API clients or wrappers
- Date/number formatters
- Custom hooks or helpers
- Scripts and config templates

Make sure to keep each module self-contained and provide a README if it’s complex or external-facing.

---

### License

MIT – Use freely with attribution.
