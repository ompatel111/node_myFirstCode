// FS and OS
let fs = require('fs');
let os = require('os');


let user = os.userInfo();
console.log(user);


fs.appendFile('gruting.txt','Hi'+ user.username + '!', ()=>{
    console.log('file created');
})