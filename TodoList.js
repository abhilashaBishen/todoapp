const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

let arr_task =[];
function addTask(){
let task =inputBox.value;
arr_task.push(task);
display_task(arr_task);
}

function display_task(arr_task){
    document.getElementById('listing').innerText = '';
   arr_task.forEach((ele,i)=>{
   
   let list_task = document.createElement('li');
   list_task = document.createAttribute('id','listing')
   list_task.innerText = arr_task[i];
   listContainer.append(list_task);

 document.getElementsByTagName('body').appendchild(listContainer);
})

}


function addTask(){
    if(inputBox.value ===''){
        alert('you must to do task');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText='\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML= localStorage.getItem('data');
}
showTask();
