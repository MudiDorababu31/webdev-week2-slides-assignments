function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(21)); // true
console.log(canVote(16)); // false

