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
        "isDone": false
    },
];

//document.getElementById("tasks").innerHTML="<h2>Hello world</h2>";

document.getElementById("tasks").innerHTML="";

for(task of tasks){
    let content = `
            <!-- Task -->
                <div class="task">
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
                        <button  class ="circul" style="background-color: rgb(164,0,0); color:white;">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                        <button  class ="circul" style="background-color: rgb(0,150,30);  color:white;">
                            <span class="material-symbols-outlined">check_circle</span> 
                        </button>
                        <button  class ="circul" style="background-color: rgba(0,16,197,0.492);  color:white;">
                            <span class="material-symbols-outlined">edit_note</span>
                        </button>              
                    </div>
                    <!--// Tasks actions //-->
                </div>
                <!--// Task //-->
    `;
    document.getElementById("tasks").innerHTML+=content;
}
