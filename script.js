function crazy(){
  const words = document.querySelectorAll(".intro span");

  words.forEach(word => {
    word.classList.remove("animate");

    // Force the browser to reset the animation
    void word.offsetWidth;

    word.classList.add("animate");
  });
}
const slider = document.querySelector(".track");
const items = [...document.querySelectorAll(".item")];

let x = 0;
const speed = 1;

function move() {
  x -= speed;

  slider.style.transform = `translateX(${x}px)`;

  // When the whole row has moved far enough,
  // reset it back to the beginning.
  if (Math.abs(x) >= slider.scrollWidth / 2) {
    x = 0;
  }

  requestAnimationFrame(move);
}

move();
// live elems
const followers = document.querySelector(".fol");
const following = document.querySelector(".fowing");
const repos = document.querySelector(".repos");
async function getGithub() {
  const response = await fetch("https://api.github.com/users/gggff123");
  const github_data = await response.json();
  followers.textContent=github_data.followers;
  following.textContent=github_data.following;
  repos.textContent=github_data.public_repos;
}

getGithub();
