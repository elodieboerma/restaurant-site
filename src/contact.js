const contentDiv = document.getElementById("content");

export function loadContactPage() {
    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const div1 = document.createElement("div");
    const chef = document.createElement("h1");
    chef.textContent = "Elodie's Mom";
    const chefTitle = document.createElement("p");
    chefTitle.textContent = "Chef";
    const chefNumber = document.createElement("p");
    chefNumber.textContent = "555-555-5555";
    const chefEmail = document.createElement("p");
    chefEmail.textContent = "realemail@real.com";
    div1.append(chef,chefTitle,chefNumber,chefEmail);

    const div2 = document.createElement("div");
    const manager = document.createElement("h1");
    manager.textContent = "Elodie";
    const managerTitle = document.createElement("p");
    managerTitle.textContent = "Manager";
    const managerNumber = document.createElement("p");
    managerNumber.textContent = "555-555-5556. Don't you dare call me.";
    const managerEmail = document.createElement("p");
    managerEmail.textContent = "reallyrealemail@real.com";
    div2.append(manager,managerTitle,managerNumber,managerEmail);

    const div3 = document.createElement("div");
    const waiter = document.createElement("h1");
    waiter.textContent = "Lucy";
    const waiterTitle = document.createElement("p");
    waiterTitle.textContent = "Waiter";
    const waiterNumber = document.createElement("p");
    waiterNumber.textContent = "555-555-5557";
    const waiterEmail = document.createElement("p");
    waiterEmail.textContent = "legitemail@literally.com";
    div3.append(waiter,waiterTitle,waiterNumber,waiterEmail);
}