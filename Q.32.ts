let current_users: string[] = ["Rumana", "Maqbool", "Salaar", "Rehan", "Amrina"];
let new_users: string[] = ["Rumana", "Maqbool","Abdul Ghafoor","Rasheeda", "Ayya", "Rizwana",];

for (let new_user of new_users) {
  let isUsernameTaken: boolean = false;

  for (let current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      isUsernameTaken = true;
      break;
    }
  }

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
