

const textArea = document.getElementById('textArea');
const saveButton = document.getElementById('saveButton');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');

const textStack = [];
let stackPointer = -1;

const savedText = localStorage.getItem('savedText');
if (savedText) {
    textArea.value = savedText;
    textStack.push(savedText);
    stackPointer = 0;
}

saveButton.addEventListener('click', () => {
    const textToSave = textArea.value;
    saveText(textToSave);
    alert('Text saved successfully!');
});

undoButton.addEventListener('click', () => {
    undo();
});

redoButton.addEventListener('click', () => {
    redo();
});

function saveText(text) {
    textStack.splice(stackPointer + 1);
    textStack.push(text);
    stackPointer = textStack.length - 1;
    localStorage.setItem('savedText', text);
}

function undo() {
    if (stackPointer > 0) {
        stackPointer--;
        textArea.value = textStack[stackPointer];
    }
}

function redo() {
    if (stackPointer < textStack.length - 1) {
        stackPointer++;
        textArea.value = textStack[stackPointer];
    }
}