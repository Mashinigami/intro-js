import createAlbumItem from "../AlbumItem";

export default function createAlbumList(albumList) {
  let albumListContainer = document.createElement("div");

  albumList.map((album) => {
    let singleButton = createAlbumItem(album);
    albumListContainer.appendChild(singleButton);
  });

  return albumListContainer;
}
