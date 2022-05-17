// var array1 =  [1, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 'a'];

// let count = 0;
// let maxCount = -1;
// for(let i = 0; i < array1.length; i++) {
//     count += 1;
//     for(let j = 0; j < array1[i].length; j++) {
//         if(array1[i] == array1[j])
//             count += 1;
//     }
//     if(count >= maxCount)
//         maxCount = count;
//     count = 0;
// }



	function mostFrequent(arr, n)
	{
		

		arr.sort();
		
		
		let max_count = 1, res = arr[0];
		let curr_count = 1;
		
		for (let i = 1; i < n; i++)
		{
			if (arr[i] == arr[i - 1])
				curr_count++;
			else
				curr_count = 1;
			
			if (curr_count > max_count)
			{
				max_count = curr_count;
				res = arr[i - 1];
			}

		}
		
		return res;
	}
	


		let arr = [1, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 'a'];

		let n = arr.length;
		document.write(mostFrequent(arr,n));



