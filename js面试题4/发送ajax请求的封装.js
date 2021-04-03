function Json(url){
    let promise = new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        hxr.open('GET',url,true)
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4)return
            if(this.status===200){
                resolve(this.response)
            }else{
                reject(this.statusText)
            }
        }
        xhr.send(null)
    })
    return promise
}