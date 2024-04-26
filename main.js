"use strict";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addToppings(topping) {
    this.toppings.push(topping);
  }
  calcPrice() {
    let price = { sm: 50, lg: 100 }[this.size];
    price += { cheese: 10, salad: 20, potato: 15 }[this.stuffing];
    this.toppings.forEach((item) => {
      return (price += { spice: 15, mayo: 20 }[item]);
    });
    return price;
  }
  calcCalories() {
    let calories = { sm: 20, lg: 40 }[this.size];
    calories += { cheese: 20, salad: 5, potato: 10 }[this.stuffing];
    this.toppings.forEach((item) => {
      return (calories += { spice: 0, mayo: 5 }[item]);
    });
    return calories;
  }
}

const hamburger = new Hamburger("sm", "cheese");
hamburger.addToppings("mayo");
console.log("Price", hamburger.calcPrice());
console.log("Calories:", hamburger.calcCalories());
