import ApiService from "./api-service";
import UserContext from "./context";
let _45_SEC = 45000;
let _timeoutId = null;

const DequeueTimer = {
  setIdleCallback(idleCallback) {
    // Call when user goes idle
    _idleCallback = idleCallback;
  },
  // Reset timer when user has been dequeued
  resetTimer(ev) {
    // Remove any timer
    clearTimer(_timeoutId);
    // Set timer to 45 sec
    _timeoutId = setTimeout(() => {
      // Remove user

      // Randomly remove an animal
      const animal = ["cat", "dog"];
      const type = animal[Math.floor(Math.random() * animal.length)];
      // Remove pet
      ApiService.deletePets(type).then(pet =>
        UserContext.updateSuccessStories(pet)
      );
    }, _45_SEC);
  }
};
