const container = document.querySelector(".header");
const createBtn = document.querySelector(".btn");
const notesInput = document.querySelectorAll(".notes-container");

createBtn.addEventListener("click", () => {
  let a = document.createElement("div");
  let ab = document.createElement("p");
  let img = document.createElement("img");
  a.className = "notes-container";
  ab.className = "notes-box";
  ab.setAttribute("contenteditable", "true");
  img.src = "./cool-bin.jpeg";
  img.className = "bin";
  container.appendChild(a).appendChild(ab).appendChild(img);
  showNotes();
});

container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
