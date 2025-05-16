# Expense Tracker

A simple web application for tracking personal income and expenses. Built with HTML, CSS, and JavaScript.

## 🌟 Features

- Add and delete income or expense transactions
- Real-time balance calculation
- Responsive layout for mobile and desktop
- Light and dark theme toggle (saved in localStorage)
- Transaction data saved in localStorage

## 🔧 What I improved

1. **Added data persistence via `localStorage`**  
   All transactions are now saved between sessions, so the user doesn't lose data when the page is refreshed.

2. **Improved transaction deletion logic**  
   After deleting a transaction, the balance is recalculated and the list is re-rendered automatically without duplication.

3. **Implemented dark mode support**  
   Using CSS variables and a theme toggle button. The selected theme is saved in `localStorage`, making the app comfortable to use at any time of day.

4. **Made the layout responsive**  
   The app adjusts to mobile screens with media queries, providing a better user experience on phones.

5. **Refactored code structure for readability**  
   Extracted functions for rendering and state updates. The logic became more modular and easier to maintain.

## 📄 License

This project is open source and free to use.

git-pages: https://rezniki.github.io/Tracker/


