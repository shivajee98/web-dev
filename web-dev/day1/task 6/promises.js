const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Hello, Promise kept")
        resolve()
    }, 1000)
})
promiseOne.then(function() {
    console.log("Task Completed")
})
new Promise(function(resolve, reject) {
    setTimeout(function() {  
    console.log("Async talk 2 ");
    resolve()
}, 10)
}).then(function() {
    console.log("Task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Shivajee", password: "dkjfbgkj", email: "shivajee@code.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
    if (!error) {
      resolve({username: "shivajee", password: "1234"})  
    } else {
        reject('ERROR: Something went wrong')
    }
    }, 1000)   
})
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The promise either resolved of rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
    if (!error) {
      resolve({username: "BOSS", password: "1234"})  
    } else {
        reject('ERROR: Boss went wrong')
    }
    }, 1000) 
})
async function consumePromiseFive () {
    try {
    const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
// async function consumeData() {
//     try {
//         const user = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await user.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// consumeData()
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))