const contentDiv = document.getElementById("content");

export function loadMenuPage() {
    const menu = document.createElement("h1");
    menu.textContent = "Menu";
    menu.classList.add("block");

    // drinks
    const drinks = document.createElement("div");

    const beverages = document.createElement("h2");
    beverages.textContent = "Beverages";
    beverages.classList.add("block");

    const drink1 = document.createElement("div");
    drink1.classList.add("block");
    const theLucy = document.createElement("h3");
    theLucy.textContent = "The Lucy";
    const theLucyText = document.createElement("p");
    theLucyText.textContent = `A cup of black tea with a splash of milk and a generous amount of brown sugar,
    served cold without ice. Available in Just A Little (8oz, $2) and I Love Sugar (16oz, $4) sizes.`;
    drink1.append(theLucy,theLucyText);

    const drink2 = document.createElement("div");
    drink2.classList.add("block");
    const theElodie = document.createElement("h3");
    theElodie.textContent = "The Elodie";
    const theElodieText = document.createElement("p");
    theElodieText.textContent = `A concotion made with two parts Dove hot cocoa and one part french vanilla 
    coffee granules for the perfect mix of chocolate and coffee. Available in Just A Little (8oz, $2) and I 
    Love Sugar (16oz, $4) sizes.`;
    drink2.append(theElodie,theElodieText);

    drinks.append(beverages,drink1,drink2);


    // sides
    const sideDishes = document.createElement("div");
    const sides = document.createElement("h2");
    sides.textContent = "Sides";
    sides.classList.add("block");

    const side1 = document.createElement("div");
    side1.classList.add("block");
    const theLucySide = document.createElement("h3");
    theLucySide.textContent = "The Lucy";
    const theLucySideText = document.createElement("p");
    theLucySideText.textContent = `One slice of whole wheat bread slathered with Bonne Maman raspberry 
    preserves and JIF creamy peanut butter. $1`;
    side1.append(theLucySide,theLucySideText);

    const side2 = document.createElement("div");
    side2.classList.add("block");
    const theElodieSide = document.createElement("h3");
    theElodieSide.textContent = "The Elodie";
    const theElodieSideText = document.createElement("p");
    theElodieSideText.textContent = `Two pieces of weemp womp low-moisture mozzarella string cheese with a cup 
    of unsweetened applesauce for dipping. $3`;
    side2.append(theElodieSide,theElodieSideText);

    const side3 = document.createElement("div");
    side3.classList.add("block");
    const reibekuchen = document.createElement("h3");
    reibekuchen.textContent = "Reibekuchen";
    const reibekuchenText = document.createElement("p");
    reibekuchenText.textContent = `Three potato pancakes also known as Polish latkes. Served with sides of sour 
    cream and applesauce. $3`;
    side3.append(reibekuchen,reibekuchenText);

    sideDishes.append(sides,side1,side2,side3);


    // entrees
    const mainDishes = document.createElement("div");
    const entrees = document.createElement("h2");
    entrees.textContent = "Entrees";
    entrees.classList.add("block");

    const main1 = document.createElement("div");
    main1.classList.add("block");
    const theLucyMain = document.createElement("h3");
    theLucyMain.textContent = "The Lucy";
    const theLucyMainText = document.createElement("p");
    theLucyMainText.textContent = `Banh Mi on whole wheat bread. Not-quite-julienned cucumber and carrots,
    mayonnaise, and marinated tofu. Vegetables may or may not be pickled. $5`;
    main1.append(theLucyMain,theLucyMainText);

    const main2 = document.createElement("div");
    main2.classList.add("block");
    const theElodieMain = document.createElement("h3");
    theElodieMain.textContent = "The Elodie";
    const theElodieMainText = document.createElement("p");
    theElodieMainText.textContent = `Whatever Elodie has been eating for lunch for the past thirty days. 
    Guaranteed to be the most delicious thing you've ever eaten. $10`;
    main2.append(theElodieMain,theElodieMainText);

    const main3 = document.createElement("div");
    main3.classList.add("block");
    const lCheese = document.createElement("h3");
    lCheese.textContent = "Mac And Cheese For Losers";
    const lCheeseText = document.createElement("p");
    lCheeseText.textContent = `A whole box of Goodles truffle mac and cheese served in an L-shaped dish because 
    it's not that good or very healthy. $5`;
    main3.append(lCheese,lCheeseText);

    const main4 = document.createElement("div");
    main4.classList.add("block");
    const comfort = document.createElement("h3");
    comfort.textContent = "Comfort In A Bowl (And On A Plate)";
    const comfortText = document.createElement("p");
    comfortText.textContent = `A cup of tomato soup made by Elodie's mom. The comfort is extended with cheddar 
    cheese on two buttered slices of honey wheat bread, toasted to perfection in an IKEA oven. $8`;
    main4.append(comfort,comfortText);

    const main5 = document.createElement("div");
    main5.classList.add("block");
    const spaetzli = document.createElement("h3");
    spaetzli.textContent = "Spaetzli Mit Saffransosse";
    const spaetzliText = document.createElement("p");
    spaetzliText.textContent = `House-made spaetzli pasta with saffron bechamel sauce. Served with tofu and 
    steamed broccoli for nutritional reasons. $10`;
    main5.append(spaetzli,spaetzliText);

    const main6 = document.createElement("div");
    main6.classList.add("block");
    const oven41 = document.createElement("h3");
    oven41.textContent = "Oven Meal For One";
    const oven41Text = document.createElement("p");
    oven41Text.textContent = `Two fajita tortillas with cheddar cheese baked in the oven to order. Served with 
    sour cream and mashed avocado. $4`;
    main6.append(oven41,oven41Text);

    const main7 = document.createElement("div");
    main7.classList.add("block");
    const fondue = document.createElement("h3");
    fondue.textContent = "Ski Trip";
    const fondueText = document.createElement("p");
    fondueText.textContent = `Emmi cheese fondue with cubed white Italian bread. Served in a traditional fondue 
    pot setup with fondue forks. $9`;
    main7.append(fondue,fondueText);

    mainDishes.append(entrees,main1,main2,main3,main4,main5,main6,main7);


    // dessert
    const sweets = document.createElement("div");
    const desserts = document.createElement("h2");
    desserts.textContent = "Desserts";
    desserts.classList.add("block");

    const dessert1 = document.createElement("div");
    dessert1.classList.add("block");
    const pt2 = document.createElement("h3");
    pt2.textContent = "Ski Trip Part 2";
    const pt2Text = document.createElement("p");
    pt2Text.textContent = `Milka brand milk chocolate melted in a small chocolate fondue cup with a fondue fork. 
    Served with fresh strawberries. $6`;
    dessert1.append(pt2,pt2Text);

    const dessert2 = document.createElement("div");
    dessert2.classList.add("block");
    const streuselkuchen = document.createElement("h3");
    streuselkuchen.textContent = "Streuselkuchen";
    const streuselkuchenText = document.createElement("p");
    streuselkuchenText.textContent = `Slice of dense German yeast crumb cake. Lightly sweet with notes of lemon 
    peel and cinnamon and a streusel topping. $5`;
    dessert2.append(streuselkuchen,streuselkuchenText);

    const dessert3 = document.createElement("div");
    dessert3.classList.add("block");
    const spitzbuben = document.createElement("h3");
    spitzbuben.textContent = "Spitzbuben";
    const spitzbubenText = document.createElement("p");
    spitzbubenText.textContent = `Also known as Linzer cookies, these labor-intensive sandwich cookies are made 
    with buttery sugar cookies featuring heart cut-outs, filled with raspberry preserves, and dusted with 
    powdered sugar. Plate of 3. $5`;
    dessert3.append(spitzbuben,spitzbubenText);

    const dessert4 = document.createElement("div");
    dessert4.classList.add("block");
    const sundae = document.createElement("h3");
    sundae.textContent = "Strawberry Shortcake Sundae";
    const sundaeText = document.createElement("p");
    sundaeText.textContent = `Sugared strawberries, crushed vanilla wafers, and fresh whipped cream atop two 
    generous scoops of vanilla bean ice cream. $7`;
    dessert4.append(sundae,sundaeText);

    sweets.append(desserts,dessert1,dessert2,dessert3,dessert4);


    contentDiv.append(menu, drinks,sideDishes,mainDishes,sweets);
}