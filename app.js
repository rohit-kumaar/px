function findSize(value) {
    let size = (value * 1366) / 1920;
    return size;
  }
  
  let x = findSize(45);
  
  console.log(x);
  