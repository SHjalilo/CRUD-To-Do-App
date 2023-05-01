// todo list

let tasks =[
    {
        "title":"Reading",
        "date":"15/12/2023",
        "isDone": false
    },
    {
        "title":"Coffe ",
        "date":"15/12/2023",
        "isDone": false
    },
    {
        "title":"Js cours",
        "date":"15/12/2023",
        "isDone": true
    },
];

// local Storage 

function getTasksFromStorage(){
    let checkTasks = JSON.parse(localStorage.getItem("myTasks"));
    //if(checkTasks == null){
    //    tasks = [];
    //}else{
    //    tasks = checkTasks;
    //} 
    
    // --- 2 method ---
    tasks = checkTasks ?? [] ;
}

getTasksFromStorage();

//document.getElementById("tasks").innerHTML="<h2>Hello world</h2>";

function showData(tasks){
document.getElementById("tasks").innerHTML="";
let index = 0;
for(task of tasks){
    let content = `
            <!-- Task -->
                <div class="task ${task.isDone ? 'done' : ''}">
                    <!-- Tasks info -->
                    <div style="width:70%;">
                        <h2> ${task.title} </h2>
                        <div>
                            <span class="material-symbols-outlined">calendar_month</span>
                            <span>
                                ${task.date}
                            </span>
                        </div>
                    </div>
                    <!--// Tasks info //-->
                    
                    <!-- Tasks actions -->
                    <div style="display:flex; justify-content:space-between; align-items:center; width:27%;">
                        <button onclick="deleteTask(${index});"  class ="circul" style="background-color: rgb(164,0,0); color:white;">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                        ${task.isDone ? `
                        <button onclick="checkTask(${index});"  class ="circul" style="background-color: rgb(244,100,30);  color:white;">
                            <span class="material-symbols-outlined">cancel</span> 
                        </button>
                        ` : `
                        <button onclick="checkTask(${index});"  class ="circul" style="background-color: rgb(0,150,30);  color:white;">
                            <span class="material-symbols-outlined">check_circle</span> 
                        </button>
                        `}
                        
                        <button  onclick="editItem(${index});" class ="circul" style="background-color: rgba(0,16,197,0.492); color:white;">
                            <span class="material-symbols-outlined">edit_note</span>
                        </button>              
                    </div>
                    <!--// Tasks actions //-->
                </div>
                <!--// Task //-->
    `;
    document.getElementById("tasks").innerHTML+=content;
    index++; 
}
}
// calling funcion showData()
showData(tasks);

// create items 

let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click",function(){
    console.log("ok");
    let data = prompt("Type here ");
    //let conf = confirm("Confirm or Cancel");
    //console.log(data);
    //console.log("data is : ",data);
    // create date 
    let now = new Date();
    // month + 1 => count start from O !!
    let date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    
    let test ={
        "title":`${data}`,
        "date":`${date}`,
        "isDone": false
    };
    tasks.push(test);
    //console.log(tasks);
    // local Storage 
    storeTasks();
    showData(tasks);
});

// delete items 

function deleteTask(index){
    //console.log(index);
    let task = tasks[index];
    let isConfirmed = confirm("Delete this : "+task.title);
    // isConfirmed => isConfirmed == true 
    if(isConfirmed){
    // splice (indexToDelete, Number_Of_Items_To_Delete_Start_From_Index)
    tasks.splice(index,1);
    storeTasks();
     showData(tasks);
     }
}

// edit items 
function editItem(index){
    let task = tasks[index];
    let newData = prompt("Edit : ",task.title);
    //console.log(task.title);
    task.title=newData;
    let now = new Date();
    let date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    task.date=date;
    storeTasks();
    showData(tasks);
}
// check isDone

function checkTask(index){
    let task = tasks[index];
    task.isDone=!task.isDone;
    //if(task.isDone){
    //    task.isDone = false;
    //}else{
    //    task.isDone = true;
    //}
    storeTasks();
    showData(tasks);
}

// Storage functions :

function storeTasks(){
    let tasksToString = JSON.stringify(tasks);
    localStorage.setItem("myTasks",tasksToString);
}
