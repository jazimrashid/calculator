let disp = document.querySelector("h1");
let nums = document.querySelectorAll(".nums")
let zero = document.querySelector(".zero")
let add = document.querySelector(".add")
let equals = document.querySelector(".equals")
let mul = document.querySelector(".mul")
let div = document.querySelector(".div")
let point = document.querySelector(".point")
let sub = document.querySelector(".sub")
let cut= document.querySelector("cross")












for (let num of nums){
    num.addEventListener("click",function(e){
       
        if (e.target.classList.contains("seven")){
            
          disp.textContent+=7
      
        }
        if (e.target.classList.contains("eight")){
            
            disp.textContent+=8
        
          }
          if (e.target.classList.contains("nine")){
            
            disp.textContent+=9
        
          }
          if (e.target.classList.contains("four")){
            
            disp.textContent+=4
        
          }
          if (e.target.classList.contains("five")){
            
            disp.textContent+=5
        
          }
          if (e.target.classList.contains("six")){
            
            disp.textContent+=6
        
          }
          if (e.target.classList.contains("one")){
            
            disp.textContent+=1
        
          }
          if (e.target.classList.contains("two")){
            
            disp.textContent+=2
        
          }
          if (e.target.classList.contains("three")){
            
            disp.textContent+=3
        
          }
          if (e.target.classList.contains("clear")){
            
            disp.textContent=""
        
          }
          // if (e.target.classList.contains("mod")){
            
          //   disp.textContent+="%"
        
          // }
          if (e.target.classList.contains("rp")){
            
            disp.textContent+=3
        
          }
          if (e.target.classList.contains("cross")){
            console.log(disp.textContent.split())
            
           disp.textContent= disp.textContent.split().pop().concat()
        
          }
         
          
      
         
      })
}
zero.addEventListener("click",function(){
        if (disp.textContent!=0){
        disp.textContent+=0
        }
    
})
add.addEventListener("click",function(){
    if (disp.textContent!=0){
        disp.textContent+="+"
    }

})
equals.addEventListener("click",function(){
    let result = eval(disp.textContent)
    disp.textContent=result
})
mul.addEventListener("click",function(){
    if (disp.textContent!=0){
        disp.textContent+="*"
    }

})
div.addEventListener("click",function(){
    if (disp.textContent!=0){
        disp.textContent+="/"
    }

})
point.addEventListener("click",function(e){
    
       disp.textContent+="."
       
    

})
sub.addEventListener("click",function(){
    if (disp.textContent!=0){
        disp.textContent+="-"
    }

})

// let display = document.querySelector("h1");
// let nums = document.querySelectorAll(".nums")
