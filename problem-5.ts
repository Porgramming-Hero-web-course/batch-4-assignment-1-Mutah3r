const getProperty = <X, Y extends keyof X>(obj: X, prop: Y): X[Y] => {
  return obj[prop];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
