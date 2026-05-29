const fichiersAudio=["Mallet B0.wav",
    "Mallet C1.wav", "Mallet C#1.wav", "Mallet D1.wav", "Mallet D#1.wav", "Mallet E1.wav", "Mallet F1.wav", "Mallet F#1.wav", "Mallet G1.wav", "Mallet G#1.wav", "Mallet A1.wav", "Mallet A#1.wav", "Mallet B1.wav",
    "Mallet C2.wav", "Mallet C#2.wav", "Mallet D2.wav", "Mallet D#2.wav", "Mallet E2.wav", "Mallet F2.wav", "Mallet F#2.wav", "Mallet G2.wav", "Mallet G#2.wav", "Mallet A2.wav", "Mallet A#2.wav", "Mallet B2.wav",
    "Mallet C3.wav", "Mallet C#3.wav", "Mallet D3.wav", "Mallet D#3.wav", "Mallet E3.wav", "Mallet F3.wav", "Mallet F#3.wav", "Mallet G3.wav", "Mallet G#3.wav", "Mallet A3.wav", "Mallet A#3.wav", "Mallet B3.wav",
    "Mallet C4.wav", "Mallet C#4.wav", "Mallet D4.wav", "Mallet D#4.wav", "Mallet E4.wav", "Mallet F4.wav", "Mallet F#4.wav", "Mallet G4.wav", "Mallet G#4.wav", "Mallet A4.wav", "Mallet A#4.wav", "Mallet B4.wav",
    "Mallet C5.wav"
];
//liste des audios du + grave au + aigu

const totalNotes=50;
const xylophoneContent= document.getElementById('xylophone');
const clavierContent= document.getElementById('clavier');

const touchesClavier=['a','z','e','r','t','y','u','i','o','p',]
//comme nous avons 50 notes mais pas 50 touches sur le clavier, on prend les touches Azerty pour la base. 
let noteActuelle=0;
//on aprt de 0 pour le clavier

const listeBoutons=[];
//tableau pour stocker les réf de nos 50 boutons