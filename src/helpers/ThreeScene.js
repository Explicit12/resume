import {
  PerspectiveCamera,
  ReinhardToneMapping,
  WebGLRenderer,
  Scene,
  Clock,
  HemisphereLight,
  SpotLight,
} from "three";

export default class ThreeScene {
  canvas;
  renderer;
  camera = new PerspectiveCamera(75, 2, 0.1, 5);
  scene = new Scene();
  clock = new Clock();
  mixer;

  constructor(canvasSelector) {
    this.canvas = document.querySelector(canvasSelector);
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });

    this.renderer.shadowMap.enabled = true;
    this.#addLight();

    this.requestAnimation();
  }

  #resizeCameraAspect() {
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
  }

  #resizeRendererToDisplaySize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const needResize =
      this.canvas.width !== width || this.canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
    }
    return needResize;
  }

  #addLight() {
    const light = new HemisphereLight(0xffeeb1, 0xfff, 2.5);
    this.scene.add(light);
    this.renderer.toneMapping = ReinhardToneMapping;
    this.renderer.toneMappingExposure = 2.3;

    const spotLight = new SpotLight(0xffa95c, 2.5);
    spotLight.position.set(-5, -5, 4);
    spotLight.castShadow = true;
    spotLight.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024 * 2;
    spotLight.shadow.mapSize.height = 1024 * 2;
    this.scene.add(spotLight);

    const anotherSpot = new SpotLight(0xfff, 15);
    anotherSpot.position.set(10, 24, -10);
    this.scene.add(anotherSpot);
  }

  requestAnimation() {
    function render(time) {
      time *= 0.001;

      if (this.#resizeRendererToDisplaySize(this.renderer)) {
        this.#resizeCameraAspect();
      }

      if (this.mixer) this.mixer.update(this.clock.getDelta() / 2);
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(render.bind(this));
    }

    requestAnimationFrame(render.bind(this));
  }
}
