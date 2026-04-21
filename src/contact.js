const contentDiv = document.getElementById("content");

export function loadContactPage() {
    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    title.classList.add("block");

    const div1 = document.createElement("div");
    div1.classList.add("item");
    const chef = document.createElement("h3");
    chef.textContent = "Elodie's Mom";
    const chefTitle = document.createElement("p");
    chefTitle.textContent = "Chef";
    const chefNumber = document.createElement("p");
    chefNumber.textContent = "555-555-5555";
    const chefEmail = document.createElement("p");
    chefEmail.textContent = "realemail@real.com";
    div1.append(chef,chefTitle,chefNumber,chefEmail);

    const div2 = document.createElement("div");
    div2.classList.add("item");
    const manager = document.createElement("h3");
    manager.textContent = "Elodie";
    const managerTitle = document.createElement("p");
    managerTitle.textContent = "Manager";
    const managerNumber = document.createElement("p");
    managerNumber.textContent = "555-555-5556"
    const doNot = document.createElement("p");
    doNot.textContent = "Don't you dare call me.";
    const managerEmail = document.createElement("p");
    managerEmail.textContent = "reallyrealemail@real.com";
    div2.append(manager,managerTitle,managerNumber,doNot,managerEmail);

    const div3 = document.createElement("div");
    div3.classList.add("item","end");
    const waiter = document.createElement("h3");
    waiter.textContent = "Lucy";
    const waiterTitle = document.createElement("p");
    waiterTitle.textContent = "Waiter";
    const waiterNumber = document.createElement("p");
    waiterNumber.textContent = "555-555-5557";
    const waiterEmail = document.createElement("p");
    waiterEmail.textContent = "legitemail@literally.com";
    div3.append(waiter,waiterTitle,waiterNumber,waiterEmail);


    contentDiv.append(title,div1,div2,div3);
}