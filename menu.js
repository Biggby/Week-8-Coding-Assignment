class MenuItem {
    constructor(name, category) { //parameters
      this.name = name;
      this.category = category; // Food & Drink
    }
}
  
  class Menu {
    constructor() {
      this.items = [];
    }
    addItem(item) {
      this.items.push(item); //.push is what pushes the items to the menu
    }
    displayMenu() { // method returns menu into console
      let menuInfo = "";
      for (let item of this.items) {
        menuInfo += `${item.name} - ${item.category}\n`;
      }
      return menuInfo;
    }
  }
  
  let item1 = new MenuItem("Quesadilla Burger", "Food" + " $15"); // defines the new  Items
  let item2 = new MenuItem("Cheese Fries", "Food" + " $9");
  let item3 = new MenuItem("Dr. Pepper", "Drink" + " $4");
  let item4 = new MenuItem("Sparkling Water", "Drink" + " $3.50");
  let item5 = new MenuItem("Chicken Tortillla", "Soup" + " $10")
  
  let menu = new Menu(); // commands below push item's to menu
  menu.addItem(item1);  
  menu.addItem(item2);
  menu.addItem(item3);
  menu.addItem(item4);
  menu.addItem(item5);
  
  console.log("Menu:");
  console.log(menu.displayMenu());