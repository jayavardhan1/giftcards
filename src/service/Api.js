
const  products =  [
    {
        imageUrl: 'domions.png',
        title: 'domions Get $5 off',
        description: "When you buy a $25 Domino's Gift Card",
        id: 1,
        price: '81.67',
        cardType: 'Online',
        brand: 'apple',
        FixedDenomination: ['25', '50', '100', '200', '500'],
        VariableDenominationFrom: '1.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '1',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This card is redeemable via the Domino’s website or app only in the U.S. Redemption: Online only No returns and no refunds on gift cards. This card is not redeemable for cash, except as required by law. For complete terms and conditions, see www.dominos.com. Use of this card constitutes acceptance of these terms and conditions. ©Domino’s IP Holder LLC. Domino’s®, Domino’s Pizza® and the modular logo are registered trademarks of Domino’s IP Holder LLC. ©Domino’s IP Holder LLC. All rights reserved.',
        RedemptionInstructions: 'Redeemable online only. No returns and no refunds on gift cards.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '15% OFF'
    },
    {
        imageUrl: 'starbucks.png',
        title: 'Get $2.8 off',
        description: 'A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards',
        id: 2,
        price: '42.18',
        cardType: 'Physical',
        brand: 'starbucks',
        FixedDenomination: ['10', '20', '30', '50'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '100.00',
        DeliveryTimeForPhysicalCardInDays: '3-5',
        DeliveryTimeForDigitalCardInDays: '1',
        TermsAndConditions: 'Terms and conditions apply. Not refundable or exchangeable.',
        RedemptionInstructions: 'Use this card at any participating store nationwide.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'No',
        discount: '56% OFF'
    },
    {
        imageUrl: 'nike.png',
        title: 'Get $12 off',
        description: 'Give the gift of sport with a Nike Gift Card',
        id: 3,
        price: '31.97',
        cardType: 'Online',
        brand: 'nike',
        FixedDenomination: ['25', '50', '75', '100'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '1-2',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
        RedemptionInstructions: 'Present this card for payment at the time of purchase.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'playstation.png',
        title: 'Get $9 off',
        description: 'From AAA titles to indie games, PlayStation Store has everything gamers want',
        id: 4,
        price: '37.43',
        cardType: 'Physical',
        brand: 'playStation',
        FixedDenomination: ['10', '20', '50', '100'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '150.00',
        DeliveryTimeForPhysicalCardInDays: '1-3',
        DeliveryTimeForDigitalCardInDays: 'Instant',
        TermsAndConditions: 'Use only on the PlayStation Network. Cannot be returned or redeemed for cash.',
        RedemptionInstructions: 'Can be redeemed on the PlayStation Store.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'apple.png',
        title: 'Get $15 off',
        description: 'The perfect gift for everything Apple: products, accessories, services, and more',
        id: 5,
        price: '95.78',
        cardType: 'Physical',
        brand: 'apple',
        FixedDenomination: ['50', '100', '200'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '5',
        DeliveryTimeForDigitalCardInDays: 'Instant',
        TermsAndConditions: 'Redeem Apple Gift Cards at Apple.com or in the Apple Store. Subject to Apple’s Terms of Use.',
        RedemptionInstructions: 'Enter the code at checkout on the Apple website or present in the store.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'nike.png',
        title: 'Get $12 off',
        description: 'Give the gift of sport with a Nike Gift Card',
        id: 6,
        price: '85.56',
        cardType: 'Online',
        brand: 'nike',
        FixedDenomination: ['25', '50', '75', '100'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '1-2',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
        RedemptionInstructions: 'Present this card for payment at the time of purchase.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'apple.png',
        title: 'Get $15 off',
        description: 'Shop with Apple Gift Cards at any Apple Store or on Apple.com',
        id: 7,
        price: '100.00',
        cardType: 'Online',
        brand: 'apple',
        FixedDenomination: ['50', '100', '150', '200'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '5',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable at Apple Stores and Apple.com, not valid for previously purchased goods.',
        RedemptionInstructions: 'Use online or in-store at the time of purchase.',
        ReturnPolicy: 'Non-refundable and cannot be exchanged for cash.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'starbucks.png',
        title: 'Save $5 on every $50 spent',
        description: 'Enjoy your favorite coffee with Starbucks Gift Cards',
        id: 8,
        price: '45.00',
        cardType: 'Physical',
        brand: 'starbucks',
        FixedDenomination: ['25', '50', '100'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '150.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Use for purchases at any Starbucks location or online.',
        RedemptionInstructions: 'Provide your card at checkout to apply.',
        ReturnPolicy: 'No returns or refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'nike.png',
        title: 'Discount $10 on $100',
        description: 'Shop on Amazon with our gift cards',
        id: 9,
        price: '90.00',
        cardType: 'Online',
        brand: 'amazon',
        FixedDenomination: ['100', '200', '300'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '4',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Amazon gift cards can be used to purchase eligible goods and services on Amazon.com and certain related sites.',
        RedemptionInstructions: 'Enter the gift card code at checkout to redeem.',
        ReturnPolicy: 'Amazon gift cards are not returnable or refundable.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'playstation.png',
        title: 'Enjoy a $20 Reward',
        description: 'Beauty and skincare from Sephora',
        id: 10,
        price: '180.00',
        cardType: 'Physical',
        brand: 'sephora',
        FixedDenomination: ['50', '100', '150'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '200.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable for merchandise sold at Sephora stores, on Sephora.com, or through the Sephora catalog.',
        RedemptionInstructions: 'Present at checkout to redeem.',
        ReturnPolicy: 'Gift cards cannot be returned or exchanged.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'nike.png',
        title: 'Save $10 on Fashion',
        description: 'Shop the latest styles with GAP',
        id: 11,
        price: '90.00',
        cardType: 'Online',
        brand: 'gap',
        FixedDenomination: ['50', '75', '100'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '4',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Can be used at GAP and affiliated brands in-store or online.',
        RedemptionInstructions: 'Redeem this card online at checkout or in-store.',
        ReturnPolicy: 'GAP gift cards are non-refundable and cannot be transferred, exchanged, or resold.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'playstation.png',
        title: 'Tech Savings',
        description: 'Get the best in electronics at Best Buy',
        id: 12,
        price: '85.00',
        cardType: 'Physical',
        brand: 'bestbuy',
        FixedDenomination: ['50', '100', '200'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable at any Best Buy store nationwide or online.',
        RedemptionInstructions: 'Show your gift card at the time of purchase.',
        ReturnPolicy: 'Best Buy gift cards are non-refundable.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },
    {
        imageUrl: 'domions.png',
        title: 'domions Get $5 off',
        description: "When you buy a $25 Domino's Gift Card",
        id: 13,
        price: '81.67',
        cardType: 'Online',
        brand: 'apple',
        FixedDenomination: ['25', '50', '100', '200', '500'],
        VariableDenominationFrom: '1.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '1',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This card is redeemable via the Domino’s website or app only in the U.S. Redemption: Online only No returns and no refunds on gift cards. This card is not redeemable for cash, except as required by law. For complete terms and conditions, see www.dominos.com. Use of this card constitutes acceptance of these terms and conditions. ©Domino’s IP Holder LLC. Domino’s®, Domino’s Pizza® and the modular logo are registered trademarks of Domino’s IP Holder LLC. ©Domino’s IP Holder LLC. All rights reserved.',
        RedemptionInstructions: 'Redeemable online only. No returns and no refunds on gift cards.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'starbucks.png',
        title: 'Get $2.8 off',
        description: 'A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards',
        id: 14,
        price: '42.18',
        cardType: 'Physical',
        brand: 'starbucks',
        FixedDenomination: ['10', '20', '30', '50'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '100.00',
        DeliveryTimeForPhysicalCardInDays: '5',
        DeliveryTimeForDigitalCardInDays: '1',
        TermsAndConditions: 'Terms and conditions apply. Not refundable or exchangeable.',
        RedemptionInstructions: 'Use this card at any participating store nationwide.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'No',
        discount: '5% OFF'
    },
    {
        imageUrl: 'nike.png',
        title: 'Get $12 off',
        description: 'Give the gift of sport with a Nike Gift Card',
        id: 15,
        price: '31.97',
        cardType: 'Online',
        brand: 'nike',
        FixedDenomination: ['25', '50', '75', '100'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '2',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
        RedemptionInstructions: 'Present this card for payment at the time of purchase.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'playstation.png',
        title: 'Get $9 off',
        description: 'From AAA titles to indie games, PlayStation Store has everything gamers want',
        id: 16,
        price: '37.43',
        cardType: 'Physical',
        brand: 'playStation',
        FixedDenomination: ['10', '20', '50', '100'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '150.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: 'Instant',
        TermsAndConditions: 'Use only on the PlayStation Network. Cannot be returned or redeemed for cash.',
        RedemptionInstructions: 'Can be redeemed on the PlayStation Store.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'apple.png',
        title: 'Get $15 off',
        description: 'The perfect gift for everything Apple: products, accessories, services, and more',
        id: 17,
        price: '95.78',
        cardType: 'Physical',
        brand: 'apple',
        FixedDenomination: ['50', '100', '200'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '5',
        DeliveryTimeForDigitalCardInDays: 'Instant',
        TermsAndConditions: 'Redeem Apple Gift Cards at Apple.com or in the Apple Store. Subject to Apple’s Terms of Use.',
        RedemptionInstructions: 'Enter the code at checkout on the Apple website or present in the store.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'nike.png',
        title: 'Get $12 off',
        description: 'Give the gift of sport with a Nike Gift Card',
        id: 18,
        price: '85.56',
        cardType: 'Online',
        brand: 'nike',
        FixedDenomination: ['25', '50', '75', '100'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '2',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
        RedemptionInstructions: 'Present this card for payment at the time of purchase.',
        ReturnPolicy: 'No returns and no refunds on gift cards.',
        PhysicalCardAvailable: 'No',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'apple.png',
        title: 'Get $15 off',
        description: 'Shop with Apple Gift Cards at any Apple Store or on Apple.com',
        id: 19,
        price: '100.00',
        cardType: 'Online',
        brand: 'apple',
        FixedDenomination: ['50', '100', '150', '200'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '5',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable at Apple Stores and Apple.com, not valid for previously purchased goods.',
        RedemptionInstructions: 'Use online or in-store at the time of purchase.',
        ReturnPolicy: 'Non-refundable and cannot be exchanged for cash.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'starbucks.png',
        title: 'Save $5 on every $50 spent',
        description: 'Enjoy your favorite coffee with Starbucks Gift Cards',
        id: 20,
        price: '45.00',
        cardType: 'Physical',
        brand: 'starbucks',
        FixedDenomination: ['25', '50', '100'],
        VariableDenominationFrom: '10.00',
        VariableDenominationTo: '150.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Use for purchases at any Starbucks location or online.',
        RedemptionInstructions: 'Provide your card at checkout to apply.',
        ReturnPolicy: 'No returns or refunds on gift cards.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'nike.png',
        title: 'Discount $10 on $100',
        description: 'Shop on Amazon with our gift cards',
        id: 21,
        price: '90.00',
        cardType: 'Online',
        brand: 'amazon',
        FixedDenomination: ['100', '200', '300'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '1000.00',
        DeliveryTimeForPhysicalCardInDays: '4',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Amazon gift cards can be used to purchase eligible goods and services on Amazon.com and certain related sites.',
        RedemptionInstructions: 'Enter the gift card code at checkout to redeem.',
        ReturnPolicy: 'Amazon gift cards are not returnable or refundable.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'

    },
    {
        imageUrl: 'nike.png',
        title: 'Enjoy a $20 Reward',
        description: 'Beauty and skincare from Sephora',
        id: 22,
        price: '180.00',
        cardType: 'Physical',
        brand: 'sephora',
        FixedDenomination: ['50', '100', '150'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '200.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable for merchandise sold at Sephora stores, on Sephora.com, or through the Sephora catalog.',
        RedemptionInstructions: 'Present at checkout to redeem.',
        ReturnPolicy: 'Gift cards cannot be returned or exchanged.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '9% OFF'

    },
    {
        imageUrl: 'apple.png',
        title: 'Save $10 on Fashion',
        description: 'Shop the latest styles with GAP',
        id: 23,
        price: '90.00',
        cardType: 'Online',
        brand: 'gap',
        FixedDenomination: ['50', '75', '100'],
        VariableDenominationFrom: '50.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '4',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Can be used at GAP and affiliated brands in-store or online.',
        RedemptionInstructions: 'Redeem this card online at checkout or in-store.',
        ReturnPolicy: 'GAP gift cards are non-refundable and cannot be transferred, exchanged, or resold.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '7% OFF'

    },
    {
        imageUrl: 'apple.png',
        title: 'Tech Savings',
        description: 'Get the best in electronics at Best Buy',
        id: 24,
        price: '85.00',
        cardType: 'Physical',
        brand: 'bestbuy',
        FixedDenomination: ['50', '100', '200'],
        VariableDenominationFrom: '25.00',
        VariableDenominationTo: '500.00',
        DeliveryTimeForPhysicalCardInDays: '3',
        DeliveryTimeForDigitalCardInDays: '0',
        TermsAndConditions: 'Redeemable at any Best Buy store nationwide or online.',
        RedemptionInstructions: 'Show your gift card at the time of purchase.',
        ReturnPolicy: 'Best Buy gift cards are non-refundable.',
        PhysicalCardAvailable: 'Yes',
        DigitalCardAvailable: 'Yes',
        discount: '5% OFF'
    },

];
 export const getProducts = async () => {
   try {
         return products;
   }
    catch (error) {
            console.error("Error fetching products: ", error);
    }
}
export const getTopProducts = async () => {
    try {
        return products.slice(0, 6);
    }
    catch (error) {
        console.error("Error fetching products: ", error);
    }
}


export const getTrendingProducts = async () => {
    try {
        return products.slice(0, 6);
    }
    catch (error) {
        console.error("Error fetching products: ", error);
    }
}

const Brands = ['apple', 'nike', 'starbucks', 'playStation', 'dominos', 'google', 'amazon', 'netflix', 'spotify', 'xbox', 'steam', 'hulu', 'ebay', 'bestbuy', 'walmart', 'target'  ];

 export const getBrands = async () => {
    try {
        return Brands;
    }
    catch (error) {
        console.error("Error fetching brands: ", error);
    }
 }
export const getProductById = async (productId) => {
    return products.find(product => product.id === parseInt(productId));
};
export const getProductsByBrand = async (brand) => {
    return products.filter(product => product.brand === brand);
};
export const getQuickLinks = async () => {
    const quickLinks = [
        {
            id: 1,
            icon: "knife.svg", // Replace with actual SVG content
            title: "Food & Drink",
            description: "Explore culinary delights"
        },
        {
            id: 2,
            icon: "entertainment.svg",
            title: "Entertainment",
            description: "Your guide to fun"
        },
        {
            id: 3,
            icon: "fashion.svg",
            title: "Fashion",
            description: "Stay trendy"
        },
        {
            id: 4,
            icon: "travel.svg",
            title: "Travel",
            description: "Plan your next adventure"
        },
        {
            id: 5,
            icon: "wellbeing.svg",
            title: "Health & Fitness",
            description: "Live a healthy life"
        },
        {
            id: 6,
            icon: "house.svg",
            title: "Home & Garden",
            description: "Decorate your home"
        },
        {
            id: 7,
            icon: "Rewards.svg",
            title: "Gifts",
            description: "Find the perfect gift"
        },

    ];
    return quickLinks;
}
export const getMyRewards = async () => {
    return  [
        {
            imageUrl: '/domions.png',
            title: 'domions Get $5 off',
            description: "When you buy a $25 Domino's Gift Card",
            id: 1,
            price: '81.67',
            cardType: 'Online',
            brand: 'apple',
            FixedDenomination: ['25', '50', '100', '200', '500'],
            VariableDenominationFrom: '1.00',
            VariableDenominationTo: '500.00',
            DeliveryTimeForPhysicalCardInDays: '1',
            DeliveryTimeForDigitalCardInDays: '0',
            TermsAndConditions: 'This card is redeemable via the Domino’s website or app only in the U.S. Redemption: Online only No returns and no refunds on gift cards. This card is not redeemable for cash, except as required by law. For complete terms and conditions, see www.dominos.com. Use of this card constitutes acceptance of these terms and conditions. ©Domino’s IP Holder LLC. Domino’s®, Domino’s Pizza® and the modular logo are registered trademarks of Domino’s IP Holder LLC. ©Domino’s IP Holder LLC. All rights reserved.',
            RedemptionInstructions: 'Redeemable online only. No returns and no refunds on gift cards.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'No',
            DigitalCardAvailable: 'Yes',
            discount: '15% OFF'
        },
        {
            imageUrl: '/starbucks.png',
            title: 'Get $2.8 off',
            description: 'A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards',
            id: 2,
            price: '42.18',
            cardType: 'Physical',
            brand: 'starbucks',
            FixedDenomination: ['10', '20', '30', '50'],
            VariableDenominationFrom: '10.00',
            VariableDenominationTo: '100.00',
            DeliveryTimeForPhysicalCardInDays: '3-5',
            DeliveryTimeForDigitalCardInDays: '1',
            TermsAndConditions: 'Terms and conditions apply. Not refundable or exchangeable.',
            RedemptionInstructions: 'Use this card at any participating store nationwide.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'Yes',
            DigitalCardAvailable: 'No',
            discount: '56% OFF'
        },
        {
            imageUrl: '/nike.png',
            title: 'Get $12 off',
            description: 'Give the gift of sport with a Nike Gift Card',
            id: 3,
            price: '31.97',
            cardType: 'Online',
            brand: 'nike',
            FixedDenomination: ['25', '50', '75', '100'],
            VariableDenominationFrom: '25.00',
            VariableDenominationTo: '500.00',
            DeliveryTimeForPhysicalCardInDays: '1-2',
            DeliveryTimeForDigitalCardInDays: '0',
            TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
            RedemptionInstructions: 'Present this card for payment at the time of purchase.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'No',
            DigitalCardAvailable: 'Yes',
            discount: '5% OFF'
        },
    ];
}

export const getMyOrders = async () => {
    return  [
        {
            imageUrl: '/domions.png',
            title: 'domions Get $5 off',
            description: "When you buy a $25 Domino's Gift Card",
            id: 1,
            price: '81.67',
            cardType: 'Online',
            brand: 'apple',
            FixedDenomination: ['25', '50', '100', '200', '500'],
            VariableDenominationFrom: '1.00',
            VariableDenominationTo: '500.00',
            DeliveryTimeForPhysicalCardInDays: '1',
            DeliveryTimeForDigitalCardInDays: '0',
            TermsAndConditions: 'This card is redeemable via the Domino’s website or app only in the U.S. Redemption: Online only No returns and no refunds on gift cards. This card is not redeemable for cash, except as required by law. For complete terms and conditions, see www.dominos.com. Use of this card constitutes acceptance of these terms and conditions. ©Domino’s IP Holder LLC. Domino’s®, Domino’s Pizza® and the modular logo are registered trademarks of Domino’s IP Holder LLC. ©Domino’s IP Holder LLC. All rights reserved.',
            RedemptionInstructions: 'Redeemable online only. No returns and no refunds on gift cards.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'No',
            DigitalCardAvailable: 'Yes',
            discount: '15% OFF'
        },
        {
            imageUrl: '/starbucks.png',
            title: 'Get $2.8 off',
            description: 'A Starbucks Gift Card is a convenient way to pay and earn stars toward rewards',
            id: 2,
            price: '42.18',
            cardType: 'Physical',
            brand: 'starbucks',
            FixedDenomination: ['10', '20', '30', '50'],
            VariableDenominationFrom: '10.00',
            VariableDenominationTo: '100.00',
            DeliveryTimeForPhysicalCardInDays: '3-5',
            DeliveryTimeForDigitalCardInDays: '1',
            TermsAndConditions: 'Terms and conditions apply. Not refundable or exchangeable.',
            RedemptionInstructions: 'Use this card at any participating store nationwide.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'Yes',
            DigitalCardAvailable: 'No',
            discount: '56% OFF'
        },
        {
            imageUrl: '/nike.png',
            title: 'Get $12 off',
            description: 'Give the gift of sport with a Nike Gift Card',
            id: 3,
            price: '31.97',
            cardType: 'Online',
            brand: 'nike',
            FixedDenomination: ['25', '50', '75', '100'],
            VariableDenominationFrom: '25.00',
            VariableDenominationTo: '500.00',
            DeliveryTimeForPhysicalCardInDays: '1-2',
            DeliveryTimeForDigitalCardInDays: '0',
            TermsAndConditions: 'This Nike Gift Card is redeemable for merchandise at any Nike-owned or Converse-owned retail store in the US and Puerto Rico or online at Nike.com and Converse.com.',
            RedemptionInstructions: 'Present this card for payment at the time of purchase.',
            ReturnPolicy: 'No returns and no refunds on gift cards.',
            PhysicalCardAvailable: 'No',
            DigitalCardAvailable: 'Yes',
            discount: '5% OFF'
        },
    ];
}
export const getClientDetails = async () => {
     const ClientDetailsData = {
        clientName: "ABB Australia",
        programName: "ABB | Perks",
        portalWebsite: "abb-uat.ffthrengage.co.uk",
        clientWebsite: "https://abb.achievers.com",
        statusOptions: ["Enabled", "Disabled"],
        transactionLimit: 5000,
        availableFrom: "",
        availableUntil: "",
        clientKey: "8f730219-2c8f-48bb-9db8-a454a3e87bcf",
        countryOptions: ["Australia"] // Add other countries as needed
    };
     return ClientDetailsData;
}

export const getCategoryDetails = async () => {
    return {
        name: "Accessories",
        parent: "Automotive",
        linkBehaviourOptions: ["Open in new tab", "Open in same tab"],
        customLink: "https://example.com",
        iconClassName: "fa-accessories",
        categoryPageHeaderImage: "",
        subCategoryPageImage: "",
        thumbnailImage: "",
        clients: ["ABB Australia", "Lifestyle Rewards"]
    };
}
const sampleData = [
    {
        id: 1,
        name: 'ABB Australia',
        programName: 'ABB | Perks',
        active: true,
        portalWebsite: 'abb-uk.ffthrengage.co.uk',
        clientWebsite: 'https://abb.achievers.com',
        startDate: '12-Oct-23',
        endDate: '',
    },
    {
        id: 2,
        name: 'AP Demo',
        programName: 'AP Demo',
        active: false,
        portalWebsite: 'ap-demo-uk.ppd.lifestyleawards.com',
        clientWebsite: '',
        startDate: '10-Mar-10',
        endDate: '',
    },
    {
        id: 3,
        name: 'Aveo',
        programName: 'Aveo',
        active: true,
        portalWebsite: 'aveostaging.withlovefrom.com',
        clientWebsite: 'https://www.aveo.com.au',
        startDate: '17-Jun-24',
        endDate: '',
    },
    {
        id: 4,
        name: 'BHP Group',
        programName: 'BHP Rewards',
        active: true,
        portalWebsite: 'bhp.ffthrengage.co.uk',
        clientWebsite: 'https://bhp.achievers.com',
        startDate: '15-Jan-22',
        endDate: '',
    },
    {
        id: 5,
        name: 'Coca-Cola',
        programName: 'Coca-Cola Perks',
        active: true,
        portalWebsite: 'coca-cola.ffthrengage.co.uk',
        clientWebsite: 'https://coca-cola.achievers.com',
        startDate: '05-Jul-21',
        endDate: '',
    },
    {
        id: 6,
        name: 'Demo Corp',
        programName: 'Demo Benefits',
        active: false,
        portalWebsite: 'demo-corp.ffthrengage.co.uk',
        clientWebsite: '',
        startDate: '20-Feb-20',
        endDate: '01-Mar-22',
    },
    {
        id: 7,
        name: 'Energy Australia',
        programName: 'Energy Rewards',
        active: true,
        portalWebsite: 'energy.ffthrengage.co.uk',
        clientWebsite: 'https://energy.achievers.com',
        startDate: '25-Dec-22',
        endDate: '',
    },
    {
        id: 8,
        name: 'Ford Australia',
        programName: 'Ford Perks',
        active: true,
        portalWebsite: 'ford.ffthrengage.co.uk',
        clientWebsite: 'https://ford.achievers.com',
        startDate: '01-Aug-20',
        endDate: '',
    },
    {
        id: 9,
        name: 'Google',
        programName: 'Google Benefits',
        active: true,
        portalWebsite: 'google.ffthrengage.co.uk',
        clientWebsite: 'https://google.achievers.com',
        startDate: '10-May-21',
        endDate: '',
    },
    {
        id: 10,
        name: 'Hewlett-Packard',
        programName: 'HP Rewards',
        active: true,
        portalWebsite: 'hp.ffthrengage.co.uk',
        clientWebsite: 'https://hp.achievers.com',
        startDate: '12-Apr-23',
        endDate: '',
    },
    {
        id: 11,
        name: 'IBM',
        programName: 'IBM Perks',
        active: true,
        portalWebsite: 'ibm.ffthrengage.co.uk',
        clientWebsite: 'https://ibm.achievers.com',
        startDate: '21-Mar-21',
        endDate: '',
    },
    {
        id: 12,
        name: 'JPMorgan',
        programName: 'JPMorgan Benefits',
        active: false,
        portalWebsite: 'jpmorgan.ffthrengage.co.uk',
        clientWebsite: '',
        startDate: '18-Nov-19',
        endDate: '30-Nov-21',
    },
    {
        id: 13,
        name: 'KPMG',
        programName: 'KPMG Perks',
        active: true,
        portalWebsite: 'kpmg.ffthrengage.co.uk',
        clientWebsite: 'https://kpmg.achievers.com',
        startDate: '15-Oct-22',
        endDate: '',
    },
    {
        id: 14,
        name: 'Lendlease',
        programName: 'Lendlease Rewards',
        active: true,
        portalWebsite: 'lendlease.ffthrengage.co.uk',
        clientWebsite: 'https://lendlease.achievers.com',
        startDate: '10-Dec-20',
        endDate: '',
    },
    {
        id: 15,
        name: 'Microsoft',
        programName: 'Microsoft Perks',
        active: true,
        portalWebsite: 'microsoft.ffthrengage.co.uk',
        clientWebsite: 'https://microsoft.achievers.com',
        startDate: '01-Sep-23',
        endDate: '',
    },
    {
        id: 16,
        name: 'NAB',
        programName: 'NAB Benefits',
        active: true,
        portalWebsite: 'nab.ffthrengage.co.uk',
        clientWebsite: 'https://nab.achievers.com',
        startDate: '20-Feb-23',
        endDate: '',
    },
    {
        id: 17,
        name: 'Optus',
        programName: 'Optus Perks',
        active: false,
        portalWebsite: 'optus.ffthrengage.co.uk',
        clientWebsite: '',
        startDate: '12-Jan-19',
        endDate: '15-Jan-22',
    },
    {
        id: 18,
        name: 'Qantas',
        programName: 'Qantas Rewards',
        active: true,
        portalWebsite: 'qantas.ffthrengage.co.uk',
        clientWebsite: 'https://qantas.achievers.com',
        startDate: '15-Jul-23',
        endDate: '',
    },
    {
        id: 19,
        name: 'Rio Tinto',
        programName: 'Rio Tinto Perks',
        active: true,
        portalWebsite: 'riotinto.ffthrengage.co.uk',
        clientWebsite: 'https://riotinto.achievers.com',
        startDate: '10-Oct-21',
        endDate: '',
    },
    {
        id: 20,
        name: 'Santos',
        programName: 'Santos Benefits',
        active: true,
        portalWebsite: 'santos.ffthrengage.co.uk',
        clientWebsite: 'https://santos.achievers.com',
        startDate: '05-Nov-22',
        endDate: '',
    },
];
export const getClientList = async () => {
    return sampleData;
}
export const getClientById = async (clientId) => {
    return sampleData.find(client => client.id === parseInt(clientId));
}
