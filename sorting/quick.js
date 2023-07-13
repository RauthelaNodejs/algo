//We are here to understand how quick sort is work as they name quick as it use to sort array fast 
//complexity-O(N log(N))
let arr = [9,5,6,67,89,1]
const quickSort = (arr) => {
    if (arr.length <= 1) {//if array have less than 1 element 
      return arr;
    }
  
    let pivot = arr[0]; // take fist element of array as a pivot element
    let leftArr = []; // define left array for less than pivot element
    let rightArr = []; //define right aray  for more than pivot element
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // here we using spres operator to create new array and call function itself
  };


console.log( quickSort(arr));




// set AWS_ACCESS_KEY_ID=AKIAYYB7NGEUCEITFG4V
// set AWS_SECRET_ACCESS_KEY=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


// this.DBConnection = new mssql.ConnectionPool({ server: "3.214.81.104", user: "cov_app_user", password: "c0v_app_user", database: "Dealpack", port: 1433 }).connect();
// Server=localhost;Database=master;Trusted_Connection=True;