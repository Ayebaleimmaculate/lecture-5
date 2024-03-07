//Alert "John" by extracting information from the person object.
const Mypersonone = {
  first_name: "John",
  lastName: "Doe"
};

console.log(Mypersonone.first_name);


//Add the following property and value to the person object: country: Uganda.
const Mypersontwo = {
    first_name: "Jane",
    lastName: "Doe"
  };
  
  Mypersontwo.country='uganda';
  console.log(Mypersontwo);

  //Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50").
  const Mypersonthree = {
    first_name: "John",
    lastName: "Doe",
    age: "50"
  };

  console.log(Mypersonthree.first_name + " " + "is" + " " + Mypersonthree.age + " " + "years")
