const allAnimals = [
  { name: "Signe", type: "honeybadger" },
  { name: "John", type: "cat" },
  { name: "Frank", type: "cat" },
  { name: "Lone", type: "abe" },
  { name: "Gwelondyn", type: "dog" },
  { name: "Freddie", type: "dog" },
];
console.log("allAnimals:", allAnimals);

filterList("cat");
filterList("dog");

function filterList(type) {
  let list;
  if (type === "cat") {
    list = allAnimals.filter(isCat);
  } else if (type === "dog") {
    list = allAnimals.filter(isDog);
  }
  // fake
  console.log("list:", list);
}
function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

// list 2

filterList2("cat");
filterList2("dog");
filterList2("honeybadger");

function filterList2(type) {
  const list = allAnimals.filter(isAnimalType);

  function isAnimalType(animal) {
    return animal.type === type;
  }

  console.log("list 2", list);
}
