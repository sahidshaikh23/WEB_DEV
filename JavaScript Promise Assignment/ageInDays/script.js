let person={firstName:"Arjun", lastName:"Sharma", age:15}




function ageInDays(obj, callback){
    let fullName=`${obj.firstName} ${obj.lastName}`;
    let age=obj.age;
    callback(fullName, age);
}

function logResult(fullName, age){
    console.log(`The person's full name is ${fullName} and their age in days is ${age *356} days`);
}


ageInDays(person, logResult)