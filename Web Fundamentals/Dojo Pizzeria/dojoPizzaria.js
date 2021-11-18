function pizzaOven(crustType, saucetype, cheeeses, toppings){
    let pizza = {};
        pizza.crustType = crustType;
        pizza.saucetype= saucetype;
        pizza.cheeeses = cheeeses;
        pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deepdish", "traditional", "mozaerella", ["pepperoni", "sausage"])
console.log(pizza1)

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

let pizza3 = pizzaOven("thin crust", "bbq", "american", "[pepperoni, pineapple]")
console.log(pizza3)

let = pizza4 = pizzaOven("stuffed crust", "traditional", "sharp chedder", ["peperoni", "bacon", "sausage"])

console.log(pizza4);