function getRandomPrice(min = 5, max = 100) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomCardType() {
    const cardTypes = ["Physical", "Online"];
    return cardTypes[Math.floor(Math.random() * cardTypes.length)];
}

const specialOffers = [
    {
        imageUrl: "domions.png",
        title: "Get $5 off",
        description: "When you buy a $25 Domino's Gift Card"
    },
    {
        imageUrl: "starbucks.png",
        title: "Get $2.8 off",
        description: "A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards"
    },
    {
        imageUrl: "nike.png",
        title: "Get $12 off",
        description: "Give the gift of sport with a Nike Gift Card"
    },
    {
        imageUrl: "playstation.png",
        title: "Get $9 off",
        description: "From AAA titles to indie games, PlayStation Store has everything gamers want"
    },
    {
        imageUrl: "apple.png",
        title: "Get $15 off",
        description: "The perfect gift for everything Apple: products, accessories, services, and more"
    },
    {
        imageUrl: "nike.png",
        title: "Get $12 off",
        description: "Give the gift of sport with a Nike Gift Card"
    },
    {
        imageUrl: "playstation.png",
        title: "Get $9 off",
        description: "From AAA titles to indie games, PlayStation Store has everything gamers want"
    },
    {
        imageUrl: "apple.png",
        title: "Get $15 off",
        description: "The perfect gift for everything Apple: products, accessories, services, and more"
    },
    {
        imageUrl: "apple.png",
        title: "Apple Gift Card",
        description: "The perfect gift for everything Apple: products, accessories, services, and more"
    },
    {
        imageUrl: "starbucks.png",
        title: "Starbucks Gift Card",
        description: "A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards"
    },
    {
        imageUrl: "nike.png",
        title: "Nike Gift Card",
        description: "Give the gift of sport with a Nike Gift Card"
    },
    // Add more special offers as needed...
];

// Populate the specialOffers with unique IDs, random prices, and random card types
specialOffers.forEach((offer, index) => {
    offer.id = index + 1;
    offer.price = getRandomPrice();
    offer.cardType = getRandomCardType();
});

console.log(specialOffers);
