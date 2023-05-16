/**
 * Explore Class Constructor
 */

console.log(`Welcome to Class Constructor`);

class ColorRGBPallate {
  constructor(r, g, b) {
    this.value = [r, g, b];
  }

  getRed() {
    return this.value[0];
  }
}

const crp = new ColorRGBPallate(250, 0, 0);

console.log(crp.getRed());
