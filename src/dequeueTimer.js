import ApiService from "./api-service";
import UserContext from "./context";
let _30_SEC = 3000;
let _timeoutId = null;

const DequeueTimer = {
  // Stop timer
  stopTimer() {
    console.log("clearing");
    clearTimeout(_timeoutId);
  },
  // Set timer
  setTimer(ev) {
    console.log("setting");
    // Set timer to 30 sec
    _timeoutId = setTimeout(() => {
      // Remove user
      ApiService.deleteUsers(UserContext.users[0]).then(res =>
        UserContext.removeUser()
      );
      // Randomly remove an animal
      const animal = ["cat", "dog"];
      const type = animal[Math.floor(Math.random() * animal.length)];
      // Remove pet
      ApiService.deletePets(type).then(pet =>
        UserContext.updateSuccessStories(pet)
      );
    }, _30_SEC);
  }
};

export default DequeueTimer;
