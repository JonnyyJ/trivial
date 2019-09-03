//A simple promise example
function getUserID(){
    return new Promise((resolve) =>{
        //Asynchronous request
        http.get(url, (results) =>{
            resolve(results.id)
        })
    })
}
getUserID().then((id)=>{
   //method
})

//Full Promie implementation
class MyPromise{
    constructor (handle){
        if(!isFunction(handle)){
            throw new Error('MyPromise must accept a function as a parameter')
        }
        //add status
        this._status = PENDING
        //add status
        this._value = undefined
        //excute handle
        try{
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err){
            this._reject(err)
        }
    }
    //add function when resovle is excuted
    _resolve(val){
        if (this._status !== PENDING) return
        this.status = FULFILLED
        this._value = val
    }
    //add function when reject is excuted
    _reject(err){
        if(this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }
}