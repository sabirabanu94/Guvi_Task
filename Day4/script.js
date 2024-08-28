// Hoisting in variables

// console.log("Hoisting " + v);
// let v = 10;

// Hoisting in function

// myfunc();

// function myfunc() {
//     console.log("hoisted using function");
// }

//local and global scope

// let a="global";
// function scope(){
//     b="local";
//     console.log("Global scope - " + a);
// }

// scope();
// console.log(b);

// var data01 = [{
//         "Name": "Sabira",
//         "Course": "FSD",
//         "Location": "Chennai",
//         "Education": "BE",
//         "Duration": "3 months",
//         "Experience": "4 years",
//         "Batch": "Tamil"
//     }
// ];

// // for loop
// for (var i = 0; i < data01.length; i++) {
//     console.log(data01[i].Name);
// }

// // for of loop
// for (let x of data01) {
//     console.log(x.Course);
// }

// //for in loop
// for (let key in data01) {
//     console.log(key);
//     console.log(`${key}= ${data01[key]}`);
// }
// //for each
// Object.keys(data01).forEach(function(key) {
//     console.log(data01[key])
// })

// let arr=[2,3,4,5,6];
// const maparr=arr.map((item,index)=>{
//     console.log(item);
//     console.log(index);
//     return item+10

// })
// console.log(maparr);

// let arr=[2,3,4,5,6];
// let i;
// let arrfilter=arr.filter(i=>i>5)
// console.log(arrfilter);

// let arr=["sabira","imran","zumi"];
// console.log(arr);
// console.log(arr[1]);
// arr.push("fathima");
// console.log(arr)
// arr.pop("fathima");
// console.log(arr)
// console.log(arr.length)
// arr.unshift("fathima");
// console.log(arr)
// arr.shift("fathima");
// console.log(arr);
// let names=arr.slice(1,4);
// console.log(names);
// let names1=arr.splice(1,1,"fathima");
// console.log(names1);

var data01 = [{
        "Name": "Sabira",
        "Course": "FSD",
        "Location": "Chennai",
        "Education": "BE",
        "Duration": "3 months",
        "Experience": "4 years",
        "Batch": "Tamil"
    },
    {
        "Name": "Banu",
        "Course": "FSD",
        "Location": "Chennai",
        "Education": "BE",
        "Duration": "3 months",
        "Experience": "4 years",
        "Batch": "Tamil"
    }
];

for (let key in data01) {
    console.log(data01[key]);
}

let keys = Object.keys(data01);
let values = Object.values(data01);
console.log(keys);
console.log(values);