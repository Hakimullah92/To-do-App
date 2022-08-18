const item=document.querySelector('#item');
const todolist=document.querySelector('#todo-list');
item.addEventListener('keyup', function(event){
    if(event.key=="Enter"){
        addlist(this.value);
        this.value="";
    }
});

function addlist(item){
    const listitem=document.createElement("li");
    listitem.innerHTML=`
    ${item}
  <i class="fa-solid fa-xmark"></i>`;
  listitem.querySelector('i').addEventListener('click',function(){
    listitem.remove();
  });
 todolist.appendChild(listitem);



}


 
