let url = "http://localhost:3000/users";
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

function submitData(userName, userEmail) {
  return fetch(url)
}