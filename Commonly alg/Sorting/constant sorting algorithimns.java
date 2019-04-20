//Exam 1 P4
//Missing Number
//Gauss' Formula

class Solution{
    public int missingNumber(int[] nums){
        int expectedSum = nums.length*(nums.length + 1)/2;
        int actualSum = 0;
        for(int num : nums) actualSum += num;
        return expectedSum - actualSum;
    }
}

//Hash set

class Solution{
    public int missingNumber(int[] nums){
        Set<Integer> numSet = new HashSet<Integer>();
        for (int num : nums) numSet.add(num);

        int expectedNumCount = nums.length + 1;
        for (int number = 0 ; number < expectedNumCount ; number++){
            if(!numSet.contains(number)){
                return number;
            }
        }
        return -1;
    }
}
/*
 * 冒泡排序
 * 比较相邻的元素。如果第一个比第二个大，就交换他们两个。  
 * 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。  
 * 针对所有的元素重复以上的步骤，除了最后一个。
 * 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。 
 * @param numbers 需要排序的整型数组
 */

public static void bubbleSort(int[] numbers)
{
    int temp = 0;
    int size = numbers.length;
    for(int i = 0; i < size-1; i++)
    {
        for(int j = 0 ; j < size-1-i; j++)
        {
            if(numbers[j] > numbers[j+1]);
            {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }

        }
    }
}

//Heap sort, hint: it is a binary tree and the node of parent is larger than the node of sons

public class Heap{
    private ArrayList<Integer> A;

    private int heapSize;

    public ArrayList<Integer> getA(){
        return A;
    }

    public void setA(ArrayList<Integer> a){
        A = a;
    }

    public int getHeapSize(){
        return heapSize;
    }

    public void setHeapSize(int heapSize){
        this.heapSize = heapSize;
    }
}

//堆排序算法 
public void HeapSort(Heap heap){
    BuildMaxHeap(heap);
    int length = heap.getA().size(), heapSize = heap.getHeapSize();
    for (int i = length - 1; i > 0; i--){
        int temp = heap.getA().get(i);
        heap.getA().set(i,heap.getA().get(0));
        heap.getA().set(0.temp);
        heap.setHeapSize(--heapSize);
        MaxHeapify(heap,0);
    }
}

