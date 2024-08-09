 // Function to speak a single letter
 function speakLetter(letter) {
    const utterance = new SpeechSynthesisUtterance(letter);
    speechSynthesis.speak(utterance);
}

// Function to speak any text
function speakText(text) {
    text = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}