{
  let count = 0;
  const display = document.querySelector("#countDisplay");

  function renderCount() {
    display.textContent = count;
  }

  document.querySelector("#up").addEventListener("click", () => {
    count = count + 1;
    renderCount();
  });

  document.querySelector("#down").addEventListener("click", () => {
    count = count - 1;
    renderCount();
  });

  document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    renderCount();
  });

  renderCount();

  const skills = ["HTML", "CSS"];

  const list = document.querySelector("#skills");
  const form = document.querySelector("#addForm");
  const field = document.querySelector("#skillField");

  function render() {
    list.innerHTML = "";

    if (skills.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No skills yet — add one above.";
      li.classList.add("empty");
      list.append(li);
      return;
    }

    for (const skill of skills) {
      const li = document.createElement("li");
      li.textContent = skill;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener("click", () => {
        const position = skills.indexOf(skill);
        skills.splice(position, 1);
        render();
      });

      li.append(removeBtn);
      list.append(li);
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = field.value.trim();
    if (!text) return;
    skills.push(text);
    render();
    field.value = "";
  });

  document.querySelector("#clearAll").addEventListener("click", () => {
    skills.length = 0;
    render();
  });

  render();

  const nameField = document.querySelector("#nameField");
  const out = document.querySelector("#count");

  nameField.addEventListener("input", (event) => {
    const n = event.target.value.length;
    out.textContent = `${n} character${n === 1 ? "" : "s"}`;
  });
}