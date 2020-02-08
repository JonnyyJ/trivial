var deleteDuplicates = function(head){
    var l = head
    if(l == null) return null
    while(l.next) {
        if(l.val == l.next.val){
            l.next = l.next.next
        }else{
            l = l.next
        }
    }
    return head
}