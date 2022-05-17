var array1 = [];
var array2 = [];

var size1 = prompt("Enter size 1");
var size2 = prompt("Enter size 2");

for(let i = 0; i < size1; i++)
    array1[i] = prompt("Enter the element " + (i + 1) + " for array1");

for(let i = 0; i < size2; i++)
    array1[i] = prompt("Enter the element " + (i + 1) + " for array2");
if(size1 != size2)
    document.write("FALSE");
else {
    for(let i = 0; i < size1; i++) {
        if(array1[i] != array2[i]) {
            document.write("FALSE");
            return;
        }
    }
    document.write("TRUE");
}

// bool twoArrEqual(int arr1[], int arr2[]) 
// { 
//     // If lengths of array are not equal means 
//     // array are not equal 
//     if (arr1.length != arr2.length) 
//         return false
  
//     // Sort both arrays 
//     sort(arr1)
//     sort(arr2)
  
//     // Linearly compare elements 
//     for (int i = 0 to i < arr1.length) 
//         if (arr1[i] != arr2[i]) 
//             return false
  
//     // If all elements were same. 
//     return true
// }