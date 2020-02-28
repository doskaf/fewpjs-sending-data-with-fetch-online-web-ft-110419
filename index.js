function submitData(userName, userEmail) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    // let h = document.createElement("h1");
    // h.textContent = object.id;
    // document.querySelector("body").appendChild(h);
  })
}