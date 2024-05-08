class MenuItem {
    constructor(name, category) {
      this.name = name;
      this.category = category;
    }
}
  
  class Menu {
    constructor() {
      this.items = [];
    }
    addItem(item) {
      this.items.push(item);
    }
    displayMenu() {
      let menuInfo = "";
      for (let item of this.items) {
        menuInfo += `${item.name} - ${item.category}\n`;
      }
      return menuInfo;
    }
  }
  
  let item1 = new MenuItem("Quesadilla Burger", "Food");
  let item2 = new MenuItem("Cheese Fries", "Food");
  let item3 = new MenuItem("Dr. Pepper", "Drink");
  let item4 = new MenuItem("Sparkling Water", "Drink")
  
  let menu = new Menu();
  menu.addItem(item1);
  menu.addItem(item2);
  menu.addItem(item3);
  menu.addItem(item4);
  
  console.log("Menu:");
  console.log(menu.displayMenu());