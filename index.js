const Api_url = "https://images-api.nasa.gov/search?q=apollo%2011";

const HTMLResponse = document.querySelector("#app");
const tpl;

fetch(`${Api_url}/users`).then(response)==>response.JSON()).then(user)==>{
  const tpl = user.map(user = user ==> `<li>${user.name} ${user.title} ${user.href }</li>`);
  HTMLResponse.innerHTML =`<ul>${tpl}</ul>`
})




//const xhr = new XMLHttpRequest();
//function onRequestHandler() {
//  if (this.readyState == 4 && this.status == 200) {
//const data =JSON.parse(this.response)
//const HTMLResponse = document.querySelector('#app');
//const tpl = data.map(user==>`<li>${user.name} ${user.title} ${user.href }</li>`);
//HTMLResponse.innerHTML=`<ul>${tpl}</ul>`
//  }
//}
//xhr.addEvenListener("load", onRequestHandler);
//xhr.open('Get',`${Api_url}/user`);
//xhr.send();
