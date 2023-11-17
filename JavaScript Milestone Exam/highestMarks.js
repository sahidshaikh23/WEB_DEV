var arr = [23, 800, 54, 8000, 76];

arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4]
  ? console.log(arr[0])
  : arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4]
  ? console.log(arr[1])
  : arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4]
  ? console.log(arr[2])
  : arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4]
  ? console.log(arr[3])
  : arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3]
  ? console.log(arr[4])
  : console.log("can not find the largest number");
