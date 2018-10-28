/*psy 
1)Initiate the largest three elements as minus infinite
first = second = third = -00

2)Iterate through all elements of array
 a) let current array element be X.
 b) if (x>first)
 {
     //this order of assignment is important
     third = second
     second = first
     first = x
 }
 
 c) else if(x>second)
 {
     third = second
     second = x
 }
 d) else if(x>third)
 {
     third = x
 }

 3) print first, second and third.
 */
 
 class printlargest
 {/*function to print three largest elements*/
 static void print2largest(int arr[], int arr_size)
 {
     int i, first, second, third;
     /* There should be at least two elements */
     if(arr_size<3)
     {
         system.out.print('invalid input');
         return;
     }
     third = first = second = Inter.MIN_VALUE;
     for(i=0;i<arr_size;i++)
     {
         /*if current element is smaller than first*/
         if(arr[i]>first)
         {
         third = second;
         second = first;
         first = arr[i];
         }
          else if (arr[i]>second)
        {
         third = second;
         second = arr[i];
        }
        else if (arr[i]>third)
        third = arr[i];
     }
     system.out.prinln('three largest elements are'+ first +'' + second + '' + third);
    
 }
 /*driver program to test above function*/
 public static void main (string[] args)
 {
     int arr[]= {12,13,1,12,33,1};
     int n =arr.length;
     print2largest(arr,n)
 }
    
}
 
