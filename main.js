document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded. Ready for JavaScript');
});

const changeTextBtn = document.getElementById('changeTextBtn');
const displayText = document.getElementById('displayText');
console.log('displayText');

changeTextBtn.addEventListener('click', function() {
  displayText.textContent = "javaScript barreefama kana jijjiireera!";
});

// FIX: Change 'waayeekoo' to 'waayeeKoo' (with capital K)
const waayeeKoo = document.getElementById('waayeeKoo');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const updateInfoBtn = document.getElementById('updateInfoBtn');

updateInfoBtn.addEventListener('click', function() {
  if (nameInput.value) {
     waayeeKoo.textContent = 'maqaan koo ' + nameInput.value + ' umuriin koo ' + ageInput.value + " dha";
  } else {
    waayeeKoo.textContent ='maaloo maqaa galchaa'
  }
 
});