# 🔍 Find Index App

## 📌 Overview

The **Find Index App** is a simple JavaScript web application that allows users to find the index of a specific number within a predefined array using the `findIndex` method.

This project is ideal for beginners to practice **array searching**, **user input handling**, and **DOM manipulation** in JavaScript.

---

## 🧩 Features

* Predefined array of numbers
* Users input a number to search
* Finds and displays the index of the number in the array
* Returns `-1` if the number is not found

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. The array `[17, 31, 77, 20, 63]` is predefined in JavaScript.
2. Users enter a number in the input field.
3. Clicking the **Find Index** button calls `findIndexOfNumber()`:

   * Parses the input value
   * Uses `numbers.findIndex()` to locate the number
   * Updates the `span` element with the index

---

## 📂 Project Structure

```
find-index-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function findIndexOfNumber() {
    let userInputValue = parseInt(document.getElementById("userInput").value);
    let index = numbers.findIndex(function(i) {
        return i === userInputValue;
    });
    document.getElementById("indexOfNumber").textContent = index;
}
```

---

## 📚 Concepts Covered

* Array searching using `findIndex()`
* DOM element selection and update
* Handling and parsing user input
* Displaying results dynamically in the DOM

---

## 🚀 Future Improvements

* Highlight the number in the array visually
* Handle invalid inputs or non-numeric values gracefully
* Allow searching multiple numbers at once

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript array methods** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
