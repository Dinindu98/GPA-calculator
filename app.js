
const form = document.querySelector('#task-form');
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
let gpa = 0.000 

loadEventListners();

function loadEventListners(){

   // document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
    resultSheet.addEventListener('click',removeTask);
   // clearBtn.addEventListener('click',clearTasks);
//filter.addEventListener('keyup',filterTask);
}

function addTask(e){

    
    var resultValue = result.options[result.selectedIndex].value;
    var creditValue = credit.options[credit.selectedIndex].value;
    var resultMark = result.options[result.selectedIndex].innerText;
    console.log(resultValue);

    if(subject.value ===''){
        alert('Add a subjectname');
    }
    else if(resultValue === '0'){
        alert('Select your result');
    }
    else if(creditValue === '0'){
        alert('Select your credit');
    }
    
    else{
        num++;
        const row = document.createElement('tr');
        row.innerHTML = `<td id="col0">${num}</td>
                        <td id="col1">${subject.value}</td>
                        <td id="col2">${creditValue}</td>
                        <td id="col3" title="${resultValue}">${resultMark}</td>
                        <td id="col4"><a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></td>`;
        resultSheet.appendChild(row);
        
        gpaCalculate(e);

        subject.value = '';
        document.getElementById('credit').seletedIndex = 'Credit';
        
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
            gpaCalculate(e);
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

function gpaCalculate(e){
    const getGpa = document.getElementById('gpa');
    var col2C = document.querySelectorAll('#col2');
    var col3R = document.querySelectorAll('#col3');
    if(col2C.length === 0){
        getGpa.innerText = `GPA 0.000`; 
    }else{
    
        gpa = 0;
        var total = 0;
        var totalCredit = 0;
    
    for(let count = 0; col2C.length>count; count++){
        total += Number(col2C[count].innerText) * Number(col3R[count].title);
        totalCredit += Number(col2C[count].innerText);
    }
    let unfixedGpa = total/totalCredit;
    gpa = unfixedGpa.toFixed(3);
    console.log(gpa);
    getGpa.innerText = `GPA ${gpa}`; 
    }
    
    
}