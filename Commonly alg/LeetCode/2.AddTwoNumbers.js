/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//ordinary solution
 var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0);
    let head = List;
    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || sum > 0){

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};

//concise solution

function addTwoNumbers(l1, l2) {
    const before = new ListNode();
    let tail = before;
    let c = 0;
  
    while (l1 || l2 || c) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;
      const v = v1+v2+c;
  
      tail.next = new ListNode(v%10);
      tail = tail.next;
      c = v >= 10 ? 1 : 0;
      l1 = l1&&l1.next;
      l2 = l2&&l2.next;
    }
  
    return before.next;
  }
  