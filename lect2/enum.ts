// Example: User Account Status
// Imagine karo ki ek system mein user ka account Active, Inactive, Suspended ya Pending state mein ho sakta hai.

enum AccountStatus{
    active=1,
    unactve=3,
    pending=4
}

let UserStatus:AccountStatus=AccountStatus.active
console.log(UserStatus);

// Game States (Game Development)
// Game development mein different game states jaise Start, Pause, Game Over ko define karte waqt enums ka use kiya ja sakta hai.

enum gameState{
     PLAY="playing",
     PAUSE="pause"
}

let gameStatus:gameState=gameState.PLAY
console.log(gameStatus);


enum Role{
    ADMIN,
    USER
}

interface User{
    name:string,
    age:number,
    role:Role,
}

const users:User={
   name:"sdfdg",
   age:23,
   role:Role.ADMIN
}

if(users.role==Role.ADMIN){
    console.log("admin");
    
}

