let btn = document.querySelectorAll('.btn');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        index(i);
    })
}

function index(i){
    let list = document.querySelectorAll('.ul');
    let spandom = document.querySelectorAll('.plus');
    for(let j=0; j<list.length;j++){
        if(j!==i){
            list[j].style.height = null;
            spandom[j].innerHTML = "+ "
        }
        else if(list[j].style.height === "150px"){
            list[j].style.height = null;
            spandom[j].innerHTML = "+ "
        }
        else{
            list[j].style.height = "150px";
            spandom[j].innerHTML = "- "
        }
        
    }
}








// function moins(i){
//     let spandom = document.querySelectorAll('.plus');
//     for(let k =0; k<spandom.length; k++){
//         if(k!==i){
//             spandom[k].innerHTML = "+ ";
//         }
//         else if(spandom[k].innerHTML === "- "){
//             spandom[k].style.height = "+ ";
//         }
//         else
//         spandom[k].innerHTML = "+ ";
//     }
// }