interface Circle {
  radius: number;
}

interface Square {
  side: number;
}

interface Rectangle {
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function renderShape(shape: Shape) {
  console.log("Rendering shape...");
}

function getArea(shape: Shape) {
  console.log("Calculating area...");
}
