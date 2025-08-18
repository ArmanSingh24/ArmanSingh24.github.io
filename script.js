//switch theme
function switchTheme() {
  var theme = document.getElementById('theme');
  var icon = document.getElementById('themeIcon');
  if (theme.getAttribute('href') == 'themes/theme1.css') {
    theme.href = 'themes/theme2.css';
  } else {
    theme.href = 'themes/theme1.css';
  }
}
// display current date and time
document.addEventListener("DOMContentLoaded", function() {
  let time = document.getElementById("timenddate");

  setInterval(() => {
    let d = new Date();
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    time.innerHTML =  " &#128218; • " + "Gwalior, IN • " + d.toLocaleDateString('en-US', options) + " • " + d.toLocaleTimeString();
  }, 1000);
});
//display age
document.addEventListener('DOMContentLoaded', function() {
  function calculateAge() {
      var birthDate = new Date('2008-03-24');
      var now = new Date();
      var age = (now - birthDate) / (365.25 * 24 * 60 * 60 * 1000);
      document.getElementById('age').innerHTML = age.toFixed(8);
  }
  setInterval(calculateAge, 50);
});

//small nav
window.onload = function () {
  var myDiv = document.getElementById("nav-items");
  var icon = document.getElementById("icon");

  icon.addEventListener("click", function () {
    if (myDiv.style.display === "block") {
      myDiv.style.display = "none";
    } else {
      myDiv.style.display = "block";
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target !== icon && myDiv.style.display === "block") {
      myDiv.style.display = "none";
    }
  });
};

