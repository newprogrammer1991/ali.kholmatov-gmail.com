import { form, disableForm, getlimit, getLength } from "./form";
import { update, render, clearCards } from "./cards";
import { generateArray, splitText } from "./generateData";
import { queue } from "./queue";
let progress = 0;
const funcMapper = (title, index) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      progress++;
      const sentence = splitText(index);
      const length = getLength();
      update(index, progress, length, sentence);
    }, Math.round(Math.random() * 9000) + 1000);
    render(title, index, length);
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  disableForm();
  reset();
  const length = getLength();
  const limit = getlimit();
  const arr = generateArray(length);
  queue(arr, funcMapper, limit).then(() => disableForm());
}

function reset() {
  progress = 0;
  clearCards();
}
