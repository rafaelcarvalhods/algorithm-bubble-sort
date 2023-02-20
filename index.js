let list = [9, 3, 1, 8, 7, 2]


function bubbleSort(arr){
    // let i = 0
    // let j = 0
    for (i=0; i<arr.length; i++){

        for(j=0; j<arr.length-i-1; j++){

            console.log(i, j, arr[j], arr[j+1])
            
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
                console.log(list)
            }

        // console.log(i, j)
    }
}


bubbleSort(list)