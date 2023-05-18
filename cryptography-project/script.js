const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const keyInput = document.getElementById("key-input");
const textArea = document.querySelectorAll("textarea");
const clearBtn = document.getElementById("clear-btn");

// Function to encrypt text using simple substitution cipher
function encryptText(text, key) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

// Function to decrypt text using simple substitution cipher
function decryptText(text, key) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

// Function to handle encrypt button click event
function handleEncrypt() {
  const key = parseInt(keyInput.value);
  if (!isNaN(key) && key >= 0 && key <= 25) {
    const input = inputText.value;
    const encrypted = encryptText(input, key);
    outputText.value = encrypted;
  } else {
    alert("Invalid key. Please enter a number between 0 and 25.");
  }
}

// Function to handle decrypt button click event
function handleDecrypt() {
  const key = parseInt(keyInput.value);
  if (!isNaN(key) && key >= 0 && key <= 25) {
    const input = inputText.value;
    const decrypted = decryptText(input, key);
    outputText.value = decrypted;
  } else {
    alert("Invalid key. Please enter a number between 0 and 25.");
  }
}

// Function to handle key input change event
function handleKeyInputChange() {
  const key = keyInput.value;
  if (key === "") {
    textArea.forEach((elem) => {
      elem.disabled = true;
    });
    encryptBtn.disabled = true;
    decryptBtn.disabled = true;
  } else {
    textArea.forEach((elem) => {
      elem.disabled = false;
    });
    encryptBtn.disabled = false;
    decryptBtn.disabled = false;
  }
}

// Function to handle clear button click event
function handleClear() {
  inputText.value = "";
  outputText.value = "";
  keyInput.value = "";
  textArea.forEach((elem) => {
    elem.disabled = true;
  });
  encryptBtn.disabled = true;
  decryptBtn.disabled = true;
}

// Add event listeners
encryptBtn.addEventListener("click", handleEncrypt);
decryptBtn.addEventListener("click", handleDecrypt);
keyInput.addEventListener("input", handleKeyInputChange);
clearBtn.addEventListener("click", handleClear);
