import config from "./config";

const ApiService = {
  // Get users
  getUsers() {
    return fetch(`${config.REACT_APP_API_BASE}/people`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // Add users to queue - user object should only contain "name" property
  postUsers(user) {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    });
  },
  // Get pets
  getPets() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // Adopt pets - animal object should only contain type property of cat or dog
  deletePets(animal) {
    return fetch(`${config.REACT_APP_API_BASE}/pets`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({type})
    }).then(res =>{
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()

    }
    );
  }
};

export default ApiService;
