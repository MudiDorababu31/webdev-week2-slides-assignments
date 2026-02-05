function getAdultMales(users) {
  return users.filter(function(user) {
    return user.age > 18 && user.gender === "male";
  });
}

let users = [
  { name: "Dorababu", age: 21, gender: "male" },
  { name: "Ananya", age: 22, gender: "female" },
  { name: "Rahul", age: 17, gender: "male" },
  { name: "Amit", age: 25, gender: "male" }
];

let result = getAdultMales(users);

console.log(result);
