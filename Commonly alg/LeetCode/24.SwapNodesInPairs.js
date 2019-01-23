
//Given a linked list, 
//swap every two adjacent nodes and return its head.

var swapPairs = function(head) {
    const swapPairs = head => {
        if (head === null) {
          return null;
        }
        if (head.next === null) {
          return head;
        }
      
        const node = swapPairs(head.next.next);
        const p2 = head.next;
        p2.next = head;
        head.next = node;
        return p2;
      };
    
};
