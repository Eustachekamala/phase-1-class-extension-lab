class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && b + c > a && a + c > b;
  }
}


class Square extends Polygon {
  get isValid() {
    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    const side = this.sides[0];
    return side * side;
  }
}