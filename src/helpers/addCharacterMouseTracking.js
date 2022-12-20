import moveJoint from "./moveJoint";

export default function addCharacterMouseTracking(neck, head) {
  document.addEventListener("mousemove", (event) => {
    if (event.sourceCapabilities?.firesTouchEvents) return false;
    const { clientX, clientY } = event;
    const mousecoords = { x: clientX, y: clientY };

    if (neck && head) {
      moveJoint(mousecoords, neck, 25);
      moveJoint(mousecoords, head, 25);
    }
  });
}
