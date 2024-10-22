let sherlock = {
  surname: "Holmes",
  address: { city: "London" },
};

let john = {
  surname: "Watson",
  address: sherlock.address,
};

john.surname = "Lennon";
john.address.city = "Malibu";

console.log('Sherlock surname:', sherlock.surname); // ?
console.log('Sherlock city:', sherlock.address.city); // ?
console.log('John surname:', john.surname); // ?
console.log('John city:', john.address.city); // ?