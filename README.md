# StockFlow-
🚀 A dynamic stock dashboard built with Next.js &amp; React, featuring real-time (ish) charts, stock comparisons, mock AI forecasts, and news sentiment from Alpha Vantage.

# 🚀 StockFlow: Your Personal Market Compass

Welcome to **StockFlow**, a dynamic and intuitive stock dashboard designed to bring market data to your fingertips. Built with the power of Next.js and React, StockFlow helps you visualize stock performance, compare companies, and even get a peek into potential future trends with a dash of AI magic (and a sprinkle of mock data for now!).

---

## ✨ Features That Make StockFlow Flow

* **Real-time (ish) Stock Charts:** Dive into vibrant, interactive charts powered by Recharts, displaying 1-minute intraday movements or robust daily historical trends.
* **Intelligent Data Fallback:** No data gaps! StockFlow smartly switches to historical daily data when markets are closed, or if real-time access isn't available for a specific symbol.
* **Side-by-Side Stock Comparison:** Easily pit two companies against each other to gauge their relative performance on a single, clear graph.
* **Mock AI-Powered Forecasts:** Get a glimpse of potential future stock movements with our mock forecasting model, adding a predictive edge to your analysis.
* **Instant News Sentiment:** A quick pulse check on market sentiment for your chosen stock, giving you a holistic view.
* **Sleek & Responsive UI:** Crafted with Tailwind CSS, StockFlow looks great and works seamlessly across all your devices.
* **Robust Error Handling:** Clear, concise messages guide you through any API hiccups or data challenges.

---

## 🏁 Get Started & Ride the StockFlow

Ready to set up your market command center? Follow these simple steps!

### Prerequisites

Make sure you have [Node.js (LTS recommended)](https://nodejs.org/) and npm (Node Package Manager) installed.

### Installation

1.  **Clone this repository:**
    ```bash
    git clone <repository_url> # Replace with your repo URL
    cd my-stock-dashboard
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```

3.  **Grab Your Alpha Vantage API Key:**
    * Head over to [Alpha Vantage](https://www.alphavantage.co/) and quickly sign up for your **free API key**. It's your passport to market data!
    * **Copy** that unique key.

4.  **Inject Your API Key:**
    * Open the file: `src/components/dashboard/Dashboard.tsx`
    * Locate this line:
        ```typescript
        const ALPHA_VANTAGE_API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY'; // <<< REPLACE THIS WITH YOUR ACTUAL KEY!
        ```
    * **Carefully replace `'YOUR_ALPHA_VANTAGE_API_KEY'` with your actual API key.** Make sure it's snugly inside the single quotes!
        *Example:* `const ALPHA_VANTAGE_API_KEY = 'YOUR_SUPER_SECRET_KEY_GOES_HERE';`

### Launch StockFlow!

1.  **Fire up the development server:**
    ```bash
    npm run dev
    ```

2.  **Open in your browser:**
    * Navigate to `http://localhost:3000` (or the address your terminal shows) and watch StockFlow come to life!

### 💡 A Note on Data & Your Free Tier API

* **Alpha Vantage Free Tier Limits:** Remember, the free tier comes with a speed limit (typically 5 requests/minute, 500/day). If you're hitting "API limit exceeded" errors, give it a few minutes or hours.
* **Market Hours Magic:** True "real-time" (1-minute delayed) data only flows when markets are open (Mon-Fri). Outside these hours, StockFlow will gracefully switch to displaying the latest **daily historical data**.
* **Premium Symbols:** Some specific international stocks or advanced data sets might be premium. If you hit a "Premium Endpoint" error, try well-known US stock symbols like `IBM`, `AAPL`, or `MSFT` – they're usually free-tier friendly!

---
## 🏗️ Under the Hood: StockFlow's Architecture

my-stock-dashboard/
├── node_modules/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router root for pages & layout
│   │   ├── layout.tsx       # Overall layout of the application
│   │   └── page.tsx         # The main entry point for your dashboard
│   ├── components/
│   │   └── dashboard/
│   │       ├── Dashboard.tsx    # The brains: fetches data, manages state, orchestrates UI
│   │       └── StockChart.tsx   # The canvas: renders the beautiful stock graphs
│   └── styles/
│       └── globals.css      # Tailwind CSS directives & global styles
├── .env.local.example       # Example for sensitive environment variables
├── .gitignore               # Files/folders Git should ignore
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── pnpm-lock.yaml           # or package-lock.json (dependency lock file)
├── postcss.config.js        # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts       # Tailwind CSS customization
└── tsconfig.json            # TypeScript configuration

---

## 🛠️ Built With

* **[Next.js](https://nextjs.org/)**: The powerful React framework.
* **[React](https://react.dev/)**: For building interactive user interfaces.
* **[TypeScript](https://www.typescriptlang.org/)**: Adding type safety and robustness to JavaScript.
* **[Tailwind CSS](https://tailwindcss.com/)**: For rapid and elegant UI styling.
* **[Alpha Vantage](https://www.alphavantage.co/)**: Our source for comprehensive stock market data.
* **[Recharts](https://recharts.org/)**: A fantastic charting library for React.

---

## 📜 License

This project is open-source and distributed under the **MIT License**. See the `LICENSE` file for more details.

---
