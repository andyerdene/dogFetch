// https://dog.ceo/api/breeds/list/all

import axios from "axios";

export async function getAllDogs() {
  return await axios.get("https://dog.ceo/api/breeds/list/all");
}

export async function getOneDog(dogName) {
  return await fetch("https://dog.ceo/api/breed/" + dogName + "/images/random");
}
