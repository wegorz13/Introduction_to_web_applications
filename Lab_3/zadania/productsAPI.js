const container = document.getElementById("container");
const filter = document.getElementById("filter");
const orderby = document.getElementById("order");
const show_btn = document.getElementById("show_btn");

let T;
let key;
let order;
let table = document.createElement("table");
container.appendChild(table);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    T = data.products;
  });

show_btn.addEventListener("click", (e) => {
  container.removeChild(table);

  let C = [...T];
  table = document.createElement("table");
  order = orderby.value;
  key = filter.value.toLowerCase();

  if (order == 1) {
    C.sort(compareAsc);
  } else if (order == -1) {
    C.sort(compareDesc);
  }

  C.forEach((element) => {
    let title = document.createElement("td");
    title.innerHTML = element.title;
    title.classList.add("title");

    if (key == "" || title.innerText.toLowerCase().includes(key)) {
      let row = document.createElement("tr");
      row.classList.add("row");

      let description = document.createElement("td");
      description.innerHTML = element.description;
      description.classList.add("description");

      let imagetd = document.createElement("td");
      let image = document.createElement("img");
      image.src = element.images[0];
      imagetd.append(image);
      imagetd.classList.add("imagetd");
      image.classList.add("image");

      row.append(title);
      row.append(description);
      row.append(imagetd);
      table.append(row);
    }
  });

  container.appendChild(table);
});

function compareAsc(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
}
function compareDesc(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) {
    return 1;
  } else if (titleA > titleB) {
    return -1;
  } else {
    return 0;
  }
}
