import config from "./config";

const ApiService = {
  // Get users
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/people`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // Add users to queue - user object should only contain "name" property
  postUsers(user) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    });
  },
  // Get pets
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // Adopt pets - animal object should only contain type property of cat or dog
  deletePets(type) {
    return fetch(`${config.API_ENDPOINT}/pets`, {
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
