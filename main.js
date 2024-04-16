let array = [3, 5, -4, 8, 11, 1, -1, 6]



function NumSum (array){
    let sum = 0
    let currInx = 0
    for(let i = currInx + 1; i < array.length; i++){
      sum = array[currInx] + array[i]
      if(sum == 10){
        console.log("да ну нахуй", array[currInx], "+", array[i],"=", sum)
        return 
      }
      else(
        sum = 0
      )
      if(i >= array.length - 1){
        array = array.slice(currInx + 1, array.length)
      }
    }
    NumSum(array)
  }

NumSum(array)
