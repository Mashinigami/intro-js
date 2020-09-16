import "./style.css";

export default function createAlbumItem(album) {
  let button = document.createElement("button");
  button.innerText = album.title;
  button.classList.add("albumItem");
  return button;
}
