sum = {
  radius: 1,
  get area() {
    return Math.PI * this.radius ** 2;
  }
}

console.log(sum.area);