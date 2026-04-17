# 🚀 JS Realtime Filter

A simple and fast **real-time search filter UI** built using **Vanilla JavaScript, HTML, and CSS**.  
It dynamically filters user cards as you type — no page reloads, no frameworks.

---

## 🔥 Features

- ⚡ Real-time search filtering
- 🧠 Case-insensitive matching
- 🧹 Clean and minimal UI
- 📦 Dynamic DOM rendering
- 🚫 No libraries — pure JavaScript
- 🎯 Debounced input for better performance

---

## 📸 Preview

<!-- Add your UI screenshot or GIF here -->

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Glassmorphism UI)
- Vanilla JavaScript (DOM Manipulation)
- TailwindCSS (UI Structure Improvements)

---

## 📂 Project Structure

js-realtime-filter/

├── index.html # Main HTML structure  
├── style.css # Styling (UI + layout)  
├── script.js # Core logic (filter + rendering)  
└── README.md

---

## ⚙️ How It Works

- Users are stored as an array of objects
- Cards are dynamically created using `document.createElement`
- Input field listens for `input` events
- Data is filtered using:

`user.name.toLowerCase().includes(query)`

- UI updates instantly without reload

---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/Akhil9982/js-realtime-filter.git

### 2. Navigate into project

cd js-realtime-filter

### 3. Open in browser

Just open `index.html` — no setup needed

---

## 📈 Future Improvements

- 🔍 Highlight matched text
- 📱 Fully responsive layout
- ⌨️ Keyboard navigation support
- 🌙 Dark/Light theme toggle
- ⚛️ Convert to React component

---

## 💡 Learnings

This project focuses on:

- DOM manipulation without frameworks
- Efficient rendering using DocumentFragment
- Debouncing for performance optimization
- Writing clean and scalable JS logic

---

## 🤝 Contributing

Pull requests are welcome.  
If you find a bug or want to improve something, feel free to open an issue

---

## 📄 License

This project is licensed under the MIT License

---

## ⭐ Support

If this helped you, give it a ⭐ on GitHub
