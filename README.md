# 🏆 ScoreMate App  
A simple **two-team scoreboard app** built with HTML, CSS, and vanilla JavaScript. 
This project was created as part of the **Scrimba Learn JavaScript path**, using a provided Figma design. It strengthened my understanding of DOM manipulation, event listeners, and clean code practices.  


⸻

🏀 About This App

A simple JavaScript-powered scoreboard that lets users keep track of scores for two teams. It was created with HTML, CSS, and vanilla JS, this project helped me strengthen my understanding of DOM manipulation, event listeners, and clean code practices. I completed the project as a code challenge and requirements for the Learn JavaScript path on Scrimba and learned how to work with a provided figma design file of how the app's components should look.

⸻

✨ Current Features
	•	Two separate team score displays (Home & Guest).
	•	Buttons to add +1, +3, +5 points per team.
	•	Data attributes (data-team, data-points) to keep the code clean and scalable.
	•	Fully functional conditional logic to update scores correctly.

⸻

🧩 Challenges I Faced
	•	Understanding the difference between id vs. class and when to use each.
	•	Learning how dataset attributes work to store custom values (data-team, data-points).
	•	Debugging forEach is not a function errors when I mistakenly used querySelector instead of querySelectorAll.
	•	Realizing I needed to sync JS variables with the DOM using .textContent, otherwise my updates wouldn’t display.
	•	How to get started and realizing the importance of completing milestones instead of complete perfection.
 
These challenges helped me visualize the logic better and taught me how important clean, reusable patterns are in JavaScript.

⸻

🚀 Future Improvements

I’d like to expand this project to make it more practical and fun:
	•	Mobile Responsiveness
	•	Larger buttons and adaptive font sizes for smaller screens.
	•	Use more CSS flex/grid and clamp() for responsive typography.
	•	Reset Button
	•	Clear all scores with one click to start a new game.
	•	Different Sport Modes
	•	Switch the button sets dynamically depending on the sport:
	•	🥊 Boxing, 🥋 Wrestling, 🥊 UFC → Round counters, points by judges.
	•	⚽ Soccer → Goals, penalties.
	•	🏒 Hockey → Goals, periods.
	•	🏊 Swimming → Heat counters, lap tracking.
	•	A toggle or dropdown to select the sport mode.

⸻

✅ Roadmap / To-Do List
- [x] Add buttons to increment scores (+1, +3, +5)  
- [x] Track scores for both teams  
- [x] Use `data-*` attributes to simplify event handling  
- [ ] Add reset button to clear scores  
- [ ] Improve mobile responsiveness (bigger buttons, flexible fonts)  
- [ ] Create sport mode toggle (boxing, wrestling, soccer, hockey, UFC, swimming)  
- [ ] Add dark mode / light mode toggle  
- [ ] Save scores in localStorage so they persist after reload  
- [ ] Add sound effects when points are scored  
- [ ] Deploy on GitHub Pages or Netlify for public use  
⸻

📚 What I Learned
	•	How to use data-* attributes as a bridge between HTML and JS.
	•	Why querySelectorAll is essential for selecting multiple elements.
	•	How to keep logic DRY (Don’t Repeat Yourself) by using one generalized update function.
	•	The importance of debugging with console.log to track logic flow when testing locally 

⸻

🔮 Next Steps

This scoreboard started simple, but I hope to transform it into a multi-sport, responsive scoreboard app. With more practice, I’d like to add:
	•	Sound effects when points are added.
	•	Dark mode / light mode toggle.
	•	Local storage to remember scores if the page reloads.
 
