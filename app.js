// buttons + count variables
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var count = document.querySelector(".count")

var num = 0;

var y = 0;

//  audios
var inc = new Audio()
inc.src = "count.mp3";

var dec = new Audio()
dec.src="dec.mp3"

var alertz = new Audio()
alertz.src = "alert.mp3";

var reset = new Audio()
reset.src = "reset.mp3";


// arrows up and down
document.addEventListener("keydown",event=>{
    if(event.key === "ArrowDown"){
       btn2.click()
    }
    else if(event.key === "ArrowUp"){
       btn3.click()
    }
})



// decrement

btn2.addEventListener("click",()=>{
    if(num === 0){
        return "";
    }
    else{
        num = num - 1;
        count.textContent = num;
        dec.play()
    }
})



// increment

btn3.addEventListener("click",()=>{
  num = num + 1;
  count.textContent = num;
  
//   Swal.fire("hello world")
   if(num==5 && y==0){
    alertz.play();
     Swal.fire("Tip: You can increment using arrow up and decrement using arrow down.");
    y++;
    
}

  inc.play()

})



// reset

btn1.addEventListener("click",()=>{
    if(num == 0){
        return ;
    }

    reset.play()

    Swal.fire({
        title:'Are you sure you want to reset your count ?',
        text:"You won't be able to revert this !",
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Okay'
    }).then(result=>{
        if(result.value){
            num = 0;
            count.textContent = num;
        }
    })

})



