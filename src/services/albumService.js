import { API_ALBUM_URL } from "../constants";

export async function getAllAlbuns() {
  return fetch(API_ALBUM_URL).then((response) => response.json());
}
