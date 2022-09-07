import { LinkedList } from "../../linked-list.js";

const ll = new LinkedList();

const output = document.querySelector("output");
const [removeButton, playButton] = document.querySelectorAll("main nav > button");
removeButton.addEventListener("click", removeWord);
playButton.addEventListener("click", playWords);
document.querySelectorAll("main fieldset button").forEach(b => b.addEventListener("click", addWord));

function addWord(e) {
    ll.add(e.target.textContent);
    updateOutput();
}

function removeWord() {
    ll.remove();
    updateOutput();
}

function playWords() {
    const words = ll.toArray().join(" ");
    speechSynthesis.speak(new SpeechSynthesisUtterance(words));
}

function updateOutput() {
    output.textContent = ll.toArray().join(", ");
}
