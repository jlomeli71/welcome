let date = new Date();
let options = {
  year: 'numeric',
  month: 'long',
};

let monthYear = date.toLocaleString('en-IN', options)

let mesAnio = document.querySelector("#mesAnio")
mesAnio.textContent = monthYear
