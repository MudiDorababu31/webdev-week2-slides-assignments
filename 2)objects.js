function greetUser(user) {
  let title;

  if (user.gender === "male") {
    title = "Mr";
  } else if (user.gender === "female") {
    title = "Mrs";
  } else {
    title = "Others";
  }

  console.log(`Hi ${title} ${user.name}, your age is ${user.age}`);
}


greetUser({
  name: "Dorababu",
  age: 21,
  gender: "male"
});

