const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("Done!");
      } else {
        reject("OH NO!");
      }
    });
  };
  
  somethingWillHappen()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
   