const addProject = document.getElementsByClassName('addProject');
const addProjectform = document.getElementById('addProject-form');
const addProjectClose = document.getElementById('addProject-close');
const overlay = document.getElementById('overlay-cover');


addProjectform.style.display = "none";
console.log("done");

for (let i = 0; i < addProject.length; i++) {
    addProject[i].addEventListener("click", () => {
        addProjectform.style.display = "block";
        overlay.style.backgroundColor=  "black";
        overlay.style.zIndex=  "1";
    });
}
addProjectClose.addEventListener("click",()=>{
    addProjectform.style.display = "none";
    overlay.style.backgroundColor=  "#fff0";
    overlay.style.zIndex=  "0";
})


const addTask = document.getElementsByClassName('addTask');
const addTaskform = document.getElementById('addTask-form');
const addTaskClose = document.getElementById('addTask-close');

addTaskform.style.display = "none"
console.log("done");

for (let i = 0; i < addTask.length; i++) {
    addTask[i].addEventListener("click", () => {
        addTaskform.style.display = "block";
        overlay.style.backgroundColor=  "black";
        overlay.style.zIndex=  "1";
    });
}
addTaskClose.addEventListener("click",()=>{
    addTaskform.style.display = "none";
    overlay.style.backgroundColor=  "#fff0";
    overlay.style.zIndex=  "0";
})

const clickToFill = document.getElementById('timeSheet-title');

clickToFill.addEventListener("dblclick",()=>{
    for (let i = 0; i < addTask.length; i++) {
        addTask[i].innerHTML= `
            
                    
                        <div>
                        <span class="t-name">Lorem Epsum</span>
                        <span class="t-code">YK8T9R</span>
                        </div>
                        <div>
                        <span class="t-desc">Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    
              
        `
    }
    for (let i = 0; i < addProject.length; i++) {
        addProject[i].innerHTML=`
            
                    
                        <span class="p-name">Lorem Epsum</span>
                        <span class="p-code">YK8T9R</span>
                    
                `
        
    }
})