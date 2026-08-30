console.log("app.js is running");

const heading = document.querySelector("h1");
console.log("William Thang:", heading);
console.log("Second-year AI student in Indonesia:", heading.textContent);

heading.textContent = heading.textContent + " · Web & Mobile 2026";

const photo = document.querySelector("#photo");
photo.alt = "William Thang at the UPH campus";
console.log("photo.src is:", photo.src);

document.querySelector("#about").classList.add("highlight");

const skills = ["HTML", "CSS", "JavaScript", "Git", "DevTools"];
const list = document.querySelector("#skills");

list.innerHTML = "";
for (const skill of skills) {
  const li = document.createElement("li");
  li.textContent = skill;
  list.appendChild(li);
}

document.querySelector("#skills li").remove();