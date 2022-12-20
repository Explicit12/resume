import { AnimationMixer } from "three";

import addCharacterMouseTracking from "../helpers/addCharacterMouseTracking";
import ThreeScene from "../helpers/ThreeScene";
import loadModel from "../helpers/loadModel";

import charGlb from "../assets/models/character.glb";
import idleGLb from "../assets/models/MaleIdle.glb";

export default class HeroCharacter {
  static #scene = new ThreeScene("#hero__three-canvas");
  static #characterModel;
  static async init() {
    this.#characterModel = await loadModel(charGlb);

    this.#setPosition();
    this.#setShadows();
    addCharacterMouseTracking(this.#getNeck(), this.#getHead());

    await this.#setIdleAnimation();

    this.#scene.scene.add(this.#characterModel.scene);
  }

  static #setPosition() {
    if (this.#characterModel) {
      this.#characterModel.scene.position.z = -1;
      this.#characterModel.scene.position.y = -1.5;
    }
  }

  static #getNeck() {
    let neck;
    this.#characterModel.scene.children[0].traverse((n) => {
      if (n.isBone && n.name === "Neck") {
        neck = n;
      }
    });

    return neck;
  }

  static #getHead() {
    let head;
    this.#characterModel.scene.children[0].traverse((n) => {
      if (n.isBone && n.name === "Head") {
        head = n;
      }
    });

    return head;
  }

  static #setShadows() {
    this.#characterModel.scene.children[0].traverse((n) => {
      if (n.isMesh) {
        n.receiveShadow = true;
        if (n.material.map) n.material.map.anisotropy = 16;
      }
    });
  }

  static async #setIdleAnimation() {
    this.#scene.mixer = new AnimationMixer(
      this.#characterModel.scene.children[0],
    );
    const animation = await loadModel(idleGLb);
    animation.animations[0].tracks.splice(3, 3);
    animation.animations[0].tracks.splice(9, 3);
    const idle = this.#scene.mixer.clipAction(animation.animations[0]);

    idle.play();
  }
}
