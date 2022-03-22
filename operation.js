function mySum(arr) {
  let result = 0;
for ( let i = 0 ; i < arr.length; i++) {
if ( arr[i] > 0) {
  result = result + arr[i];
   }
if (arr.length === 0) {
return 0;
  }
 }
return result
}

module.exports = mySum
