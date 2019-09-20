
const form = document.querySelector('#task-form');
const taskList = document.getElementById('transection-table');
const  clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

const subject = document.querySelector('#subject');
const result = document.querySelector('#result');
const credit = document.querySelector('#credit');
var element = document.querySelectorAll('select');

document.addEventListener('DOMContentLoaded',function(){
    
    var instance = M.FormSelect.init(element,Option);
 });

const resultSheet = document.getElementById('result-sheet');
let num =0;

loadEventListners();

function loadEventListners(){

   // document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
   // taskList.addEventListener('click',removeTask);
   // clearBtn.addEventListener('click',clearTasks);
//filter.addEventListener('keyup',filterTask);
}

function addTask(e){

    var elements = document.querySelectorAll('#result');
    var instances = M.FormSelect.getInstance(element);
    var b = instances.getSelectedValues();
    console.log(b);

    if(subject.value ===''){
        alert('Add a subjectname');
    }
    else if(result.value === ''){
        //alert('Select your result');
    }
    else if(credit.value === ''){
        //alert('Select your credit');
    }
    
    else{
        num++;
        const row = document.createElement('tr');
        row.innerHTML = `<td id="col0">${num}</td>
                        <td id="col1">${assets.value}</td>
                        <td id="col1">${equity.value}</td>
                        <td id="col1">${income.value}</td>
                        <td id="col1">${liabilities.value}</td>
                        <td id="col1"><a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></td>`;
        transectionTable.appendChild(row);
        const assetsArray = assets.value.split("-");
        const equityArray = equity.value.split("-");
        const incomeArray = income.value.split("-");
        const liabilityArray = liabilities.value.split("-");

        if(assetsArray.length >1 && assetsArray[0] !== ""){
            assets.value = parseFloat(assetsArray[0]) - parseFloat(assetsArray[1]);
        }
        if(equityArray.length >1 && equityArray[0] !==""){
            equity.value = parseFloat(equityArray[0]) - parseFloat(equityArray[1]);
        }
        if(incomeArray.length >1 && incomeArray[0] !==""){
            income.value = parseFloat(incomeArray[0]) - parseFloat(incomeArray[1]);
        }
        if(liabilityArray.length >1 && liabilityArray[0] !==""){
            liabilities.value = parseFloat(liabilityArray[0]) - parseFloat(liabilityArray[1]);
        }

        
        equity.value = parseFloat(equityArray[0] - parseFloat(equityArray[1]));

        console.log(assets.value);
        console.log(assetsArray[1]);
        
        assets.value = '';
        equity.value = '';
        income.value  = '';
        liabilities.value = '';
        
    }
    e.preventDefault();
    // const row = document.createElement('tr');
    // row.innerHTML = ''
   
    // row.appendChild(document.createTextNode(amount.value));
    // const link = document.createElement('a');
    // link.className = 'delete-item secondary-content';
    // link.innerHTML = '<i class="fa fa-remove"></i>';
    // li.appendChild(link);
    // taskList.appendChild(li);
    // storeTaskInLocalStorage(amount.value);
    // amount.value='';
    // console.log(li);
    // e.preventDefault();
}


function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target.value);
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.parentElement.remove();
            // removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
        
    }
    
}

// function getTasks(){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks =[];

//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.forEach(function(task){
//         const li = document.createElement('li');
//         li.className = 'collection-item';
//         li.appendChild(document.createTextNode(task));
//         const link = document.createElement('a');
//         link.className = 'delete-item secondary-content';
//         link.innerHTML = '<i class="fa fa-remove"></i>';
//         li.appendChild(link);
//     });
// }
// function removeTaskFromLocalStorage(taskitem){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks =[];

//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.forEach(function(task, index){
//         if(taskitem.textContent === task){
//             tasks.splice(index, 1);
//         }
//     });
//     localStorage.setItem('tasks',JSON.stringify(tasks));
// }


// function clearTasks(){

//     while(taskList.firstChild){
//         console.log(taskList.firstChild);
//         taskList.removeChild(taskList.firstChild);
//     }
// }

// function filterTask(e){
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.collection-item').forEach(function(task){
//         const item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text) != -1){
//             task.style.display = 'block';
//         }else{
//             task.style.display = 'none';
//         }
//     });
//     console.log(text);
// }

// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks')===null){
//         tasks =[];

//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks',JSON.stringify(tasks));
// }