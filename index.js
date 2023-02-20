let list = [3, 8, 7, 2, 1]


function bubbleSort(arr){
    let i = 0
    let j = 0
    for (i; i<arr.length; i++){

        for(j; j<arr.length; j++){

            if(arr[j] < arr[j+1]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = arr[i]
                console.log(arr)
            }

        // console.log(i, j)
        }
    }
}

bubbleSort(list)