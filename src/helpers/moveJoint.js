import { MathUtils } from "three";
import getMouseDegrees from "./getMouseDegrees";


export default function moveJoint(mouse, joint, degreeLimit) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  joint.rotation.y = MathUtils.degToRad(degrees.x);
  joint.rotation.x = MathUtils.degToRad(degrees.y);
}
