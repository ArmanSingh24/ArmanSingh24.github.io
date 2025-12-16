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

// Spotify Now Playing
async function loadSpotifyStatus() {
  try {
    const res = await fetch(
      "https://my-spotify-activity.vercel.app/api/status"
    );
    const data = await res.json();

    document.getElementById("spotify-status").innerText =
      data.text;
  } catch (err) {
    document.getElementById("spotify-status").innerText =
      "🎧 Unavailable";
  }
}

loadSpotifyStatus();
