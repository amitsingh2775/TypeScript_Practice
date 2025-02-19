// Example: User Account Status
// Imagine karo ki ek system mein user ka account Active, Inactive, Suspended ya Pending state mein ho sakta hai.
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["active"] = 1] = "active";
    AccountStatus[AccountStatus["unactve"] = 3] = "unactve";
    AccountStatus[AccountStatus["pending"] = 4] = "pending";
})(AccountStatus || (AccountStatus = {}));
var UserStatus = AccountStatus.active;
console.log(UserStatus);
// Game States (Game Development)
// Game development mein different game states jaise Start, Pause, Game Over ko define karte waqt enums ka use kiya ja sakta hai.
var gameState;
(function (gameState) {
    gameState["PLAY"] = "playing";
    gameState["PAUSE"] = "pause";
})(gameState || (gameState = {}));
var gameStatus = gameState.PLAY;
console.log(gameStatus);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var users = {
    name: "sdfdg",
    age: 23,
    role: Role.ADMIN
};
if (users.role == Role.ADMIN) {
    console.log("admin");
}
