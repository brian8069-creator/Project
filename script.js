let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });

    speech.voice = voices[0];
}
window.speechSynthesis.onvoiceschanged = loadVoices;
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
});