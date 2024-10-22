// OBJECT COPY

const originalSpreadsheet = {
  hasPendingChanges: false,
  author: "Ze",
  cells: ["1", "2", "3"],
  metadata: {
    title: "My spreadsheet",
    id: 1546300800000,
  },
};

const duplicateSpreadsheet = (original) => {
  if (original.hasPendingChanges) {
    throw new Error("You need to save the file before you can duplicate it.");
  }
  let copy = structuredClone(original);
  copy.metadata.title = "Copy of " + original.metadata.title;
  return copy;
};

const duplicatedSpreadsheet = duplicateSpreadsheet(originalSpreadsheet);

console.log("Duplicated Spreadsheet", duplicatedSpreadsheet);
console.log("Original Spreadsheet", originalSpreadsheet);
