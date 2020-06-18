async function getData() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=19"
  );
  const data = await response.json();
  return data;
}

function createImage(imageUrl) {
  let item = document.createElement("img");
  item.setAttribute("src", imageUrl);
  return item;
}

function createLink(srcLink) {
  let newLink = document.createElement("a");
  newLink.className = "card";
  newLink.setAttribute("src", srcLink);
  return newLink;
}

async function createMorties() {
  let items = document.createElement("div");
  items.className = "cards";

  let morties = [];
  await getData().then((rpta) => (morties = rpta.results));

  for (const mortie of morties) {
    src = mortie.image;
    link = createLink();
    link.append(createImage(src));
    items.append(link);
  }
  return items;
}

async function showItems() {
  let items = await createMorties();
  form.after(items);
}

showItems();
