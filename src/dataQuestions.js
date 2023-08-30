export const initialQuestions = [
  {
    title: "How do you drink your coffee?",
    choices: [
      {
        label: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        label: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        label: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
    selectedChoice: '',
  },
  {
    title: "What type of coffee?",
    choices: [
      {
        label: "Single origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        label: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        label: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
    selectedChoice: '',
  },
  {
    title: "How much would you like?",
    choices: [
      {
        label: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        label: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        label: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
    selectedChoice: '',
  },
  {
    title: "Want us to grind them?",
    choices: [
      {
        label: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        label: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        label: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
    selectedChoice: '',
  },
  {
    title: "How often should we deliver?",
    choices: [
      {
        label: "Every week",
        description: "$14.00 per shipment. Includes free first-class shipping.",
      },
      {
        label: "Every 2 weeks",
        description: "$17.25 per shipment. Includes free priority shipping.",
      },
      {
        label: "Every month",
        description: "$22.50 per shipment. Includes free priority shipping.",
      },
    ],
    selectedChoice: '',
  },
];

export const categories = [
  {
    number: "01",
    name: "Preferences",
  },
  {
    number: "02",
    name: "Bean type",
  },
  {
    number: "03",
    name: "Quantity",
  },
  {
    number: "04",
    name: "Grind option",
  },
  {
    number: "05",
    name: "Deliveries",
  },
];
