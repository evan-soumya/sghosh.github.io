// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dynamicWords = ["Research Scholar", "Student", "Science Enthusiast"];
    let index = 0;
    const dynamicElement = document.getElementById('dynamicWords');

    function changeWord() {
        dynamicElement.textContent = dynamicWords[index];
        index = (index + 1) % dynamicWords.length;
    }

    setInterval(changeWord, 3000);
    changeWord();
});

function copyLink() {
    const dummy = document.createElement('input');
    const url = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("Website link copied to clipboard!");
}
