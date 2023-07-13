
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

function mergeSort(array) {
    const half = array.length / 2
    console.log(half,"oooo",array.length);
    if(array.length < 2){
    return array 
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
console.log(mergeSort(unsortedArr))