// pehla tarika
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
})

// second way-- dusra tarika
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async tast 2 is completed');
        resolve();
    },2000)
}).then(function(){
    console.log('promise consumed');
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'chai',email:'chai@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// promiseFour handel error using then catch
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'hitesh',password:'123456'})
        }
        else{
            reject('ERROR:Something went wrong');
        }
    },3000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((userame)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('the promise is either resolve or rejected');
})


//promisefive, handle error using async await
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'javascript',password:'123456'})
        }
        else{
            reject('ERROR:JS went wrong');
        }
    },3000)
})
async function  consumePromiseFive() {
//not grace fully error handle

    // const response=await promiseFive
    // console.log(response);
    

//grace fully error handle
    try{
        const response=await promiseFive
    console.log(response);
    
    }catch(error){
        console.log(error);
    }
    
}
consumePromiseFive();

// handle using async await function
async function getAllUsers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=response.json();
    console.log(data);
    }
    catch(error){
        console.log('E:',error);
    }
}
getAllUsers();

// handle using then & catch
//IMPORTANT
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))