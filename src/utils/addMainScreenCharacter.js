import { AnimationMixer } from "three";

import ThreeScene from "../helpers/ThreeScene";
import loadModel from "../helpers/loadModel";
import addCharacterMouseTracking from "../helpers/addCharacterMouseTracking";

const mainScreenScene = new ThreeScene("#hero__three-canvas");

export default async function addMainScreenCharacter() {
  const characterModel = await loadModel(
    "src/assets/models/6395b3403747d77532695963.glb",
  );

  let neck;
  let head;

  characterModel.scene.children[0].traverse((n) => {
    if (n.isMesh) {
      n.receiveShadow = true;
      if (n.material.map) n.material.map.anisotropy = 16;
    }

    if (n.isBone && n.name === "Neck") {
      neck = n;
    }

    if (n.isBone && n.name === "Head") {
      head = n;
    }
  });

  addCharacterMouseTracking(neck, head);

  // sec position and add to scene
  characterModel.scene.position.z = -1;
  characterModel.scene.position.y = -1.5;
  mainScreenScene.scene.add(characterModel.scene);

  // add idle animation;
  mainScreenScene.mixer = new AnimationMixer(characterModel.scene.children[0]);
  const animation = await loadModel("src/assets/models/MaleIdle.glb");
  animation.animations[0].tracks.splice(3, 3);
  animation.animations[0].tracks.splice(9, 3);
  const idle = mainScreenScene.mixer.clipAction(animation.animations[0]);

  idle.play();
}
