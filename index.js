// At profile page
const trash = document.getElementById("trash");
const area = document.getElementById("area");
const info = document.querySelector("info");

area.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash") {
    eo.target.parentElement.style.opacity = "0.4";
    eo.target.parentElement.style.textDecoration = "line-through";
  }
});
// the open list avatar
const avatar = document.getElementById("avatar");
const avatarlist = document.getElementById("avatarl");
const notlist = document.getElementById("notl");
const not = document.querySelector(".icon-bell-o");
const page = document.querySelectorAll(".page");

function open() {
  avatarlist.classList.toggle("select-clicked");
  avatar.parentElement.parentElement.classList.toggle("c-avatar");
}
avatar.addEventListener("click", (eo) => {
  open();
  notlist.classList.remove("select-notclicked");
});
// for notification
not.addEventListener("click", (eo) => {
  notlist.classList.toggle("select-notclicked");
  avatarlist.classList.remove("select-clicked");
  avatar.parentElement.parentElement.classList.remove("c-avatar");
});
