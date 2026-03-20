function testIndividualListeners(containerId,itemCount){

    const container=document.getElementById(containerId)
    
    const start=performance.now()
    
    for(let i=1;i<=itemCount;i++){
    
    const item=container.querySelector(`[data-id="todo-${i}"]`)
    
    if(item){
    
    const checkbox=item.querySelector('input')
    
    checkbox.addEventListener("change",()=>{
    
    item.classList.toggle("completed",checkbox.checked)
    
    })
    
    }
    
    }
    
    return performance.now()-start
    
    }
    
    function testDelegation(containerId){
    
    const container=document.getElementById(containerId)
    
    const start=performance.now()
    
    container.addEventListener("change",e=>{
    
    if(e.target.type==="checkbox"){
    
    const item=e.target.closest(".todo-item")
    
    item.classList.toggle("completed",e.target.checked)
    
    }
    
    })
    
    return performance.now()-start
    
    }
    
    console.log("Individual:",testIndividualListeners("todo-list",1000))
    
    console.log("Delegation:",testDelegation("todo-list"))