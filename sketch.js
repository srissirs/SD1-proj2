let recognition;
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();

  // Initialize speech recognition
  recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create a speech recognition instance
  recognition.continuous = true;
  recognition.onresult = gotSpeech; // Set the callback function for recognized speech
  recognition.start(); // Start listening
}

function gotSpeech() {
  let result = event.results[event.resultIndex][0].transcript; // Get the recognized speech
  console.log(result); // Print the recognized speech to the console
  if (result.includes("Circle") || result.includes("circle")) {
    // Draw a circle
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 50, 50);
  }
  if (result.includes("play music")) {
    playGenerativeMusic();
  }
}

function playGenerativeMusic() {
  // Use the p5.js sound library to create generative music
  // You can use random notes, rhythms, and effects based on the voice command
  // For example:
  let note = random(60, 72); // Random MIDI note
  let duration = random(0.2, 2); // Random note duration

  // Create a synth and play the note
  let synth = new p5.Oscillator();
  synth.freq(midiToFreq(note));
  synth.start();
  synth.amp(0.5);
  synth.fade(0, duration);
}
