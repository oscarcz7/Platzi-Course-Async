const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do something async"), 3000)
      : reject(new Error("testing de error"));
  });
};

// async structure for async

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("before");
doSomething();
console.log("after");

// catching errors with async await
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (err) {
    console.error(err);
  }
};


console.log("before1");
anotherFunction();
console.log("after2");
