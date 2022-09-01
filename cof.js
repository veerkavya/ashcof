const hover=document.querySelectorAll(".hovbutton");
const menu=document.getElementsByClassName("menu")[0];

{
 var i=0;
 hover.forEach(function(e){
    e.addEventListener("click",function(){
        i+=1;
        if(i<=1){
           
            menu.insertAdjacentHTML("afterend",`<div class="cart">
            <h2 class="h3">My cart
            </h2>
            <button class="remove r1"><i class="fa-solid fa-xmark i9" ></i></button>
            <ul class="cu">

            </ul>
        </div>
        `)
        }
        const c=e.previousElementSibling.previousElementSibling.textContent;
        const cart=document.getElementsByClassName("cu");
        const img=e.parentElement.parentElement.nextElementSibling.getAttribute("src")
       
        cart[0].insertAdjacentHTML("beforeend",`<li><img src="${img}">${c}<button class="remove"><i class="fa-solid fa-xmark i9" ></i></button></li>`);
    
        const remove1=document.querySelectorAll(".remove");
        
        remove1.forEach(function(e1){
            e1.addEventListener("click",function(){
                if(e1.classList.contains("r1")){
                    i=0;
                    
                }
                
                
                e1.parentElement.remove()
                if(cart[0]!=undefined){
                    if([...(cart[0].children)].length==0){
                        const cart1=document.getElementsByClassName("cart")[0];
                        cart1.remove()
                        i=0;
                    }}
                
            })
        })
 })
 })
}