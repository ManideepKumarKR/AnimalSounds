document.addEventListener("DOMContentLoaded", function () {
  const animalSounds = {
    lion: "sounds/lion.mp3",
    elephant: "sounds/elephant.mp3",
    cow: "sounds/cow.mp3",
    dog: "sounds/dog.mp3",
    cat: "sounds/cat.mp3",
    goat: "sounds/goat.mp3",
    pigeon: "sounds/pigeon.mp3",
    eagle: "sounds/eagle.mp3",
    horse: "sounds/horse.mp3",
    lion: "sounds/lion.mp3",
  };

  const gridContainer = document.getElementById("gridContainer");

  // Create 3x3 grid of animal images
  for (const animal in animalSounds) {
    const animalImage = document.createElement("img");
    animalImage.src = `images/${animal}.jpg`;
    animalImage.alt = animal;
    animalImage.classList.add("animal");
    animalImage.addEventListener("click", () => playAnimalSound(animal));
    gridContainer.appendChild(animalImage);
  }

  function playAnimalSound(animal) {
    const audio = document.getElementById("audio");
    audio.src = animalSounds[animal];
    audio.play();

    // Add a class to the clicked animal for 2 seconds
    const clickedAnimal = document.querySelector(`[alt="${animal}"]`);
    clickedAnimal.classList.add("clicked");

    setTimeout(() => {
      clickedAnimal.classList.remove("clicked");
    }, 2000);
  }
});
