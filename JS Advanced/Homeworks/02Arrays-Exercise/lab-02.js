function lab(array) {

   return array.reduce((acc, cur,ind,arr) => acc+cur/arr.length   );

}

console.log(lab([3, 0, 10, 4, 7, 3]))