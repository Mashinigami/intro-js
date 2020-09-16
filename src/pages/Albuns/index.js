import createAlbumList from "../../components/AlbumList";
import * as albumService from "../../services/albumService";

const renderInputSearch = function renderInputSearch(inicialValue = "") {
  const inputSearch = document.createElement("input");
  inputSearch.value = inicialValue;
  inputSearch.setAttribute("placeholder", "Buscar álbum");
  return inputSearch;
};

const PageAlbuns = async () => {
  try {
    let allAlbuns = await albumService.getAllAlbuns();

    const albumListContainer = document.createElement("div");
    const albumList = createAlbumList(allAlbuns);
    const inputSearch = renderInputSearch();

    inputSearch.onkeyup = function searchAlbum(e) {
      albumListContainer.innerHTML = "";

      let albumFilter = allAlbuns.filter((album) =>
        album.title.includes(e.target.value)
      );

      albumListContainer.appendChild(createAlbumList(albumFilter));
    };

    albumListContainer.append(albumList);

    document.body.appendChild(inputSearch);
    document.body.appendChild(albumListContainer);
  } catch {
    console.log("Deu ruim");
  }
};

export default PageAlbuns;
