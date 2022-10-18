// 1 

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person['name']); // Bob
console.log(person.name); // Bob

// 3

let myArray = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3,
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


// 4 

let obj = {
  b: 2,
  a: 1,
  c: 3,
}

let objArray = Object.entries(obj);
objArray = objArray.map(function(arr) {
  return arr.map(function(el){
    return Number.isInteger(el) ? el : el.toUpperCase();
  });
});


console.log(obj);
console.log(objArray);

// 5

let myProtoObj = {
  foo: 1,
  bar: 2,
}

let myObj = Object.create(myProtoObj);

console.log(myProtoObj);
console.log(myObj.foo);
console.log(myObj.bar);

// 7
console.log('______________________________');

myObj.qux = 3;
console.log(myObj.qux);

// 8

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
}

function copyObj(obj, keys = []) {
  let copy = {}

  if (keys.length === 0) keys = Object.keys(obj);
    
  keys.forEach(function(key){
      copy[key] = obj[key];
    }); 

  return copy;
}

let newObj = copyObj(objToCopy);
console.log(newObj); // { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2); // { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3); // { bar: 2 }

// 11

let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj2.bar[3]['xyz'] = 606
console.log(obj2)

