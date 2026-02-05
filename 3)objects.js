function greetUser(user) {
  let title;

  // Decide title based on gender
  if (user.gender === "male") {
    title = "Mr";
  } else if (user.gender === "female") {
    title = "Mrs";
  } else {
    title = "Others";
  }

  // Check voting eligibility
  let votingStatus;
  if (user.age >= 18) {
    votingStatus = "You are legal to vote.";
  } else {
    votingStatus = "You are not legal to vote yet.";
  }

  // Final greeting message
  console.log(`Hi ${title} ${user.name}, your age is ${user.age}. ${votingStatus}`);
}



greetUser({
  name: "Dorababu",
  age: 21,
  gender: "male"
});
greetUser({
  name: "Ananya",
  age: 16,
  gender: "female"
});

