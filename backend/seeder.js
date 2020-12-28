const Pizza = require('./models/Pizza');
const mongoose = require('mongoose');


class Product {
  create(type) {
    let product
    switch (type) {
      case 'Meat':
        return product = new Pizza({
          name: 'Meat',
          description: 'Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/Pepperoni-traditional.jpg',
          price: 12,
        })
        break;
      case 'PizzaWithRedFish':
        return product = new Pizza({
          name: 'Pizza with red fish',
          description: 'The long-awaited pizza! Fresh taste! Bold mix of salmon fish with mozzarella cheese, cream cheese and tomatoes',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/c6ac6769d068cf8e34c5a507d850b79f.png',
          price: 6,
        })
        break;
      case 'Cheeses':
        return product = new Pizza({
          name: '10 Cheeses',
          description: 'Even more cheeses! Mozzarella, classic chillegini, soft young cheese, smoked Italian cheese mix, blue cheese, Reggianito, Cheddar with Parmegiano and oregano sauce',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/5b22b77dad21aaa5026b76cc6251935d.jpg',
          price: 5,
        })
        break;
      case 'SweetAndSourPork':
        return product = new Pizza({
          name: 'Sweet and sour pork',
          description: 'Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/18a85f746b9e0ecf90a82d94b4c46b8d.jpg',
          price: 13,
        })
        break;
      case 'ItalianWithWozzarellaAndPepperoni':
        return product = new Pizza({
          name: 'Italian with mozzarella and pepperoni',
          description: 'Traditional Italian recipe with two types of cheese: grated Mozzarella and classic chillegini; spicy pepperoni, mushrooms and blend of seasonings',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/e9bd5c6431e2148b1a5fd7d8b9d0df10.jpg',
          price: 11,
        })
        break;
      case 'ChickenBlueCheese':
        return product = new Pizza({
          name: 'Chicken blue cheese',
          description: 'Perfect combination: tender chicken fillet with blue cheese crumbles, Parmeggiano sauce, mix of Italian cheeses and Mozzarella cheese',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/Hawai-traditional.jpg',
          price: 12,
        })
        break;
      case 'SweetAndSourPork':
        return product = new Pizza({
          name: 'Meat',
          description: 'Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/Pepperoni-traditional.jpg',
          price: 12,
        })
        break;
      case 'Pepperoni':
        return product = new Pizza({
          name: 'Pepperoni',
          description: 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/Cheese-traditional.jpg',
          price: 12,
        })
        break;
      case 'ChickenBBQ':
        return product = new Pizza({
          name: 'Chicken BBQ',
          description: 'Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion',
          picture: 'https://cdn.papajohns.ru/images/catalog/thumbs/full/Chicken-BBQ-traditional.jpg',
          price: 4,
        })
        break;

      default:
        return null
       }
    product.type = type
  }
}

const factory = new Product();

const meat = factory.create('Meat');
const pizzaWithRedFish =factory.create('PizzaWithRedFish');
const cheeses =factory.create('Cheeses');
const sweetAndSourPork =factory.create('SweetAndSourPork');
const italianWithWozzarellaAndPepperoni =factory.create('ItalianWithWozzarellaAndPepperoni');
const chickenBlueCheese =factory.create('ChickenBlueCheese');
const pepperoni =factory.create('Pepperoni');
const chickenBBQ =factory.create('ChickenBBQ');


module.exports.createPizzaDB = async function () {
  await meat.save();
  await pizzaWithRedFish.save();
  await cheeses.save();
  await sweetAndSourPork.save();
  await italianWithWozzarellaAndPepperoni.save();
  await chickenBlueCheese.save();
  await pepperoni.save();
  await chickenBBQ.save();
}


