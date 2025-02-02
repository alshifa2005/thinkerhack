// Tab Switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
  });
});

// Mood Mapping Alert System
const moodButtons = document.querySelectorAll('.mood');
const moodAlert = document.getElementById('mood-alert');
let moodHistory = [];

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    moodHistory.push(mood);

    if (moodHistory.length >= 3) {
      const lastThree = moodHistory.slice(-3);
      if (lastThree.every(m => m === mood)) {
        moodAlert.textContent = `Alert: You've logged "${mood}" three times in a row. Consider reaching out to support.`;
      } else {
        moodAlert.textContent = '';
      }
    }
  });
});