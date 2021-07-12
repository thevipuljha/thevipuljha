function initialize() {
  const profilePic = document.getElementById("profilePic");
  profilePic.addEventListener("mouseenter", (event) => {
    profilePic.classList.toggle("levitate");
  });
  profilePic.addEventListener("mouseleave", (event) => {
    profilePic.classList.toggle("levitate");
  });
}

window.onload = initialize;
