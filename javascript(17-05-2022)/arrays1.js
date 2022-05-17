var array1 = [4, 6, 7, 8, 2, 1, -2];

        for(let i = 0; i < array1.length - 1; i++) {
            var min = i;
            for(let j = i + 1; j < array1.length; j++) {
                if(array1[min] > array1[j]) {
                    min = j;
                }
            }
            if(i != min) {
                let temp = array1[min];
                array1[min] = array1[i];
                array1[i] = temp;
            }
        }
        for(let i = 0; i < array1.length; i++) {
            document.write(array1[i] + " ");
        }