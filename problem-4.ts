interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  height: number;
  width: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("height" in shape) {
    return shape.height * shape.width;
  } else {
    return 0;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea);
console.log(rectangleArea);
