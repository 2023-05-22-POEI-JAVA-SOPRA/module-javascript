import { usersService } from "../service/user.service.js";
import { UserRow } from "./components/user-row.js";

// Pending...
// Rejected...
// Resolved...
// let users;
usersService.fetchAll().then((response) => {
  const users = response.data;
  const $users = document.querySelector("#usersList");
  for (const user of users) {
    $users.innerHTML += UserRow(user);
  }
});

// class UserHome {
//   constructor(userService) {
//     this.userService = userService;
//     this.$users = document.querySelector("#usersList");
//   }

//   render() {
//     this.usersService.fetchAll().then((response) => {
//       const users = response.data;
//       for (const user of users) {
//         this.$users.innerHTML += UserRow(user);
//       }
//     });
//   }
// }

// const userHome=new UserHome(usersService)
// userHome.render()
