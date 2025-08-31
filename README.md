
# 🍕 The Golden Crust Clicker

## 🧠 Reflection

Creating **The Golden Crust Clicker** was both a fun and challenging project that allowed me to combine interactive design, state management, and front-end web development practices into a cohesive and enjoyable game experience.

This project pushed me to improve my JavaScript logic, structure code with reusable functions, and handle dynamic DOM updates. It also taught me the importance of debugging and adapting when things didn’t go as planned — particularly when managing multiple JavaScript files.

## 🔨 What I Built

**The Golden Crust Clicker** is a clicker-style incremental game where players collect pizza slices by clicking and purchasing upgrades that increase their cost per second (CPS). The core technologies used include:

* **HTML** – for semantic structure and layout
* **CSS** – for responsive and animated user interface
* **JavaScript** – for all game logic, DOM manipulation, and local storage management
* **API integration** - for dynamic upgrade data 

## ✅ Features Implemented

* **Dynamic Upgrade Shop** – Users can purchase upgrades that increase their SPS.
* **Responsive UI** – Clicking and upgrades all update the UI instantly.
* **Local Storage** – Game progress is saved and restored using localStorage.
* **Automated Progress** – `setInterval` is used to update the pizza count every second based on owned upgrades.
* **Sound Toggle and Stats Display** – Users can toggle sound effects
* **Modular Code** – Functions are used effectively to separate logic and improve code readability.
* **API integration**

## 🎯 Requirements Met

* ✅ Fetch and display upgrades from a single, consistent source
* ✅ Use functions to organize logic
* ✅ Handle user interactions via event listeners
* ✅ Use `localStorage` to save/restore game state
* ✅ Use `setInterval` to manage game state, increment slices, and update the UI

## 🧱 Challenges I Faced

* **Multiple JavaScript Files**: Initially split code across two files but ran into issues where DOM elements weren't being properly recognized. Eventually merged into one JS file for simplicity and better control.
* **Styling**: CSS took a lot of time. Balancing layout, responsiveness, and design proved to be more complex than expected.
* **CPS Logic**: Correctly calculating and updating cost per second required refining logic several times.
* **Overambition**: I tried to implement rotating backgrounds, detailed stats, and more features — but these added complexity and bugs. I had to simplify and focus on core features.
* **Feature Scaling**: Wanted to track how many upgrades were purchased and show more stats, but couldn’t implement everything in the time frame.

## 🌱 What I'd Like to Improve in the Future

* Add more upgrade types and dynamic shop items
* Implement detailed stats (e.g., total upgrades purchased, slices clicked manually)
* Introduce animations or sound effects for clicks and upgrades
* Add a customizable settings menu (e.g., sound toggle, UI themes)
* Handle potential API errors using `try/catch`
* Improve UI polish with smoother transitions and visual feedback


## 🧁 Final Thoughts

This project was a great learning experience. I learned the importance of simplifying when things get complex and focusing on the core functionality before adding stretch features. I am pleased with the results and look forward to further developing the project by refining its presentation, incorporating new features, and exploring deployment options for broader access.

It will be a valuable addition to my professional portfolio. Moving forward, I aim to enhance the user experience, add additional features, and consider monetization options, such as hosting it on a dedicated website. Potential features could include p achievements, leaderboards, or themed events, among other possibilities.

## 📚 Resources I Used

1. **JavaScript Basics**

   * [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
   * [JavaScript.info](https://javascript.info/)
2. **Local Storage**

   * [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
3. **Fetch & Async/Await**

   * [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
4. **Event Handling**

   * [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
5. **CSS & UI**

   * [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
6. **DOM Manipulation**

   * [MDN DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)