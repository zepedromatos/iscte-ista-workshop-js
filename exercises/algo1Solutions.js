const electricVehicles = [
  {
    brand: "BMW",
    model: "i4",
    basePrice: "62000",
  },
  {
    brand: "BMW",
    model: "i4 M50",
    basePrice: "74500",
  },
  {
    brand: "BMW",
    model: "i7",
    basePrice: "146850",
  },
  {
    brand: "BMW",
    model: "iX",
    basePrice: "89150",
  },
  {
    brand: "BMW",
    model: "iX M60",
    basePrice: "139300",
  },
  {
    brand: "BMW",
    model: "iX3",
    basePrice: "76200",
  },
  {
    brand: "Mini",
    model: "ELECTRIC",
    basePrice: "35050",
  },
];

// Exercise 1:
// Get an array with just the names of the models
const modelNames = electricVehicles.map((car) => car.model);

// Exercise 2:
// Get two arrays, one with the vehicles which cost less than 80.000€ and the other with the ones which cost 80.000€ or more. Get the entire object for each car
const cheaperVehicles = electricVehicles.filter((car) => car.basePrice < 80000);
const moreExpensiveVehicles = electricVehicles.filter(
  (car) => car.basePrice >= 80000
);

// Exercise 3:
// Get the amount we'd have to pay, if we were to buy all the vehicles on the list at base price.
const totalAmount = electricVehicles.reduce(
  (acc, element) => Number(element.basePrice) + acc,
  0
);

// Exercise 4:
// Get an array of strings which presents the car and price according to the format: "BRAND MODEL starting from XXXX.XX€".
// Example: "Mini ELECTRIC starting at 35050.00€"
const presentationString = electricVehicles.map((car) => {
  const { brand, model, basePrice } = car;
  const basePriceFloat = Number(basePrice).toFixed(2);
  return `${brand} ${model} starting from ${basePriceFloat}€`;
});

const presentationString2 = electricVehicles.map(
  (car) => `${car.brand} ${car.model} starting from ${car.basePrice}.00€`
);

// Exercise 5:
// Get a list of the vehicles but in a different format. brand should be changed to maker, model to version and basePrice to startingPrice.
// You should also add a new key called of availability and the value should be "available to all.
const newFormat = electricVehicles.map((car) => {
  const {
    brand: maker,
    model: version,
    basePrice: startingPrice,
    availability = "available",
  } = car;
  return { maker, version, startingPrice, availability };
});
