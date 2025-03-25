# StockGrow Trading Platform

StockGrow is a simplified stock trading web application that allows users to view stock prices, buy/sell stocks, and track their portfolio performance in real time.

## Features

### Core Features
- **Stock Market Data**: Fetches real-time stock prices from APIs.
- **User Authentication**: Secure login and authentication with JWT tokens.
- **Portfolio Management**: Users can track their owned stocks and performance.
- **Buy & Sell Stocks**: Users can place market orders and execute transactions.
- **Real-time Updates**: Uses APIs to update stock prices dynamically.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **APIs**: Alpha Vantage, Yahoo Finance API (Paid APIs)
- **Other**: REST APIs

## Development Steps

To set up and run the project, follow these steps:

### 1. Clone and Set Up the Frontend
   ```bash
   git clone https://github.com/avinashkadam10/StockGrow.git
   cd StockGrow
   npm install
   npm start;

This will start the frontend of the StockGrow platform.

### 2. Clone and Set Up the Backtend
  ```bash
git clone https://github.com/avinashkadam10/sbackend.git
cd sbackend
npm install


create a .env 
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

### 3. Clone and Set Up the Dashboard
```bash
git clone https://github.com/avinashkadam10/sDashboard.git
cd sDashboard
npm install
npm start


Connect the Backend with the Frontend and Dashboard
Ensure the backend is running and update API endpoints in both the frontend (StockGrow) and dashboard as required.

Test user authentication, stock transactions, and real-time updates.


Live URL : https://stockgrowa.onrender.com/