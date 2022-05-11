// https://dog.ceo/api/breeds/list/all

import axios from "axios";

export async function getAllDogs() {
  return await axios.get("https://dog.ceo/api/breeds/list/all");
}
