function getAdultUsers(users) {
  return users.filter(function(user) {
    return user.age > 18;
  });
}

let users = [
  { name: "Dorababu", age: 21 },
  { name: "Ananya", age: 17 },
  { name: "Rahul", age: 25 },
  { name: "Sneha", age: 16 }
];

let adults = getAdultUsers(users);

console.log(adults);
