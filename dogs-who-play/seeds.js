const p = new Promise(function(resolve, reject) {
    console.log(resolve, reject);
  });
  console.log(p);

Dog.find({name: Affenpinscher})
  .then(function(dogs) {
    console.log(dogs);
  });