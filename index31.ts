let username: string[] = ["Salaar", "Maqbool","Rumana" ,"Abdul Rehman", "Ahmed", "Amrina"];

if (username.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let guest of username) {
    if (guest === 'Salaar') {
      //console.log('Hello Maqbool, would you like to see a status report?');
    } else {
      //console.log(`Hello ${guest}, thank you for logging in again.`);
    }
  }
}
    console.log("Removing whole list to print the correct message");
username = [];

if (username.length === 0) {
  console.log("\nWe need to find some users!");
}