const myButton = document.querySelector('button');
// 1. Find our new counter span element on the page
const counterSpan = document.getElementById('counter'); 

const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#9b59b6'];
let colorIndex = 0;
let clickCount = 0; // 2. Start a counter at 0

myButton.addEventListener('click', () => {
  // Cycle the background color
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  
  // 3. Add 1 to our click counter
  clickCount = clickCount + 1; 
  
  // 4. Update the actual text on the screen!
  counterSpan.textContent = clickCount; 
});


