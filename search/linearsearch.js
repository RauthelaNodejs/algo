//complexity -  O(1)
let arr = [1,3,5,7,8]
const linearSearch = (arr, item)=>{
    for (const i in arr) {
        if (arr[i] === item)  {
            return `Item ${item} present at this position ${arr[i]}`
        }else{
        return `Item ${item} not present in given array `
        }
    }
}

console.log(linearSearch(arr, 5));