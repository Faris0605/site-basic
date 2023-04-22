// activeMenu-mobile
const menu=document.getElementById("menu-mobile");
var x=150;
function iconActive(){
    menu.style.display="block";
  let time=setInterval(function(){
        menu.style.left=x+"%";
        if(x<=100){
            clearInterval(time);
        }else{
            x=x-1;
        }
    },5)
}
// removeMenu-mobile
function iconRemove(){
    if(x<=100){
       let time=setInterval(function(){
            menu.style.left=x+"%";
            if(x>=150){
                clearInterval(time);
                menu.style.display="none";
            }else{
                x=x+1;
            }
        },5);
    }
}
