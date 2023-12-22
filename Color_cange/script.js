const change = document.querySelector(".change").childNodes
// console.log(change)
const body = document.querySelector("body")

change.forEach(function (buttons){
    buttons.addEventListener("click",function(ele){
        // console.log(ele)
        // console.log(ele.target)
       if(ele.target.id === "red"){
        document.body.style.backgroundColor = 'red'
       }
       if(ele.target.id === "green"){
        body.style.backgroundColor = 'green'
       }
       if(ele.target.id === "black"){
        body.style.backgroundColor = 'black'
       }
       if(ele.target.id === "yellow"){
        body.style.backgroundColor = 'yellow'
       }
    })

});