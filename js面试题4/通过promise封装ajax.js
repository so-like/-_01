function url(url){
    let p = new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function(){
            if(this.readyState ==4)return
            if(this.status ==200){
                resolve(this.response)
            }else{
                reject(error)
            }
        }
        xhr.send(null)
    })
    return p
}


