/** 
* *********  Instance  ************** 
*   var map = new HashMap(); 
*   map.put("key1","Value1"); 
*   map.put("key2","Value2"); 
*   map.put("key3","Value3"); 
*   map.put("key4","Value4"); 
*   map.put("key5","Value5"); 
*   alert("size："+map.size()+" key1："+map.get("key1")); 
*   map.remove("key1"); 
*   map.put("key3","newValue"); 
*   var values = map.values(); 
*   for(var i in values){ 
*       document.write(i+"："+values[i]+"   "); 
*   } 
*   document.write("<br>"); 
*   var keySet = map.keySet(); 
*   for(var i in keySet){ 
*       document.write(i+"："+keySet[i]+"  "); 
*   } 
*   alert(map.isEmpty()); 
*/ 
function HashMap(){
    //define length
    var length = 0;
    //create an object
    var obj = new Object();
    //determine whether the key was included in the object
    this.containsKey = function(key){
        return (key in obj);
    };
    //determine whether the Value was included in the object
    this.containsValue = function (value){
        for(var key in obj){
            if(obj[key] == value){
                return true;
            }
        }
        return false;
    };
    //add data into map
    this.put = function(key,value){
        if(!this.containsKey(key)){
            length++;
        }
        obj[key] = value;
    };

}
