public static int[] countSort1(int[] arr){
    if(arr == null || arr.length ==0){
        return null;
    }
    int max = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;

    //find the max and min value in the array
    for(int i =0; i<arr.length; i++){
        max = Math.max(max, arr[i]);
        min = Math.min(min,arr[i]);
    }
    int help[] = new int[max];
    //fint the times that every element appears
    for(int i =0; i<arr.length;i++){
        int mapPos = arr[i] - min;
        help[mapPos]++;
    }
    int index = 0;
    for(int i = 0;i< help.length; i++){
        while(help[i]-- >0){
            arr[index++] = i+min;
        }
    }
    return arr;
}