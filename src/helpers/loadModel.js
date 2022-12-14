import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default async function loadModel(pathToCharacter) {
  const loader = new GLTFLoader();
  const model = await new Promise((res) => {
    loader.load(pathToCharacter, (gltf) => res(gltf));
  });

  return model;
}
