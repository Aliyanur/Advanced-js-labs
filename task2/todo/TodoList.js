import { EventDelegator } from "../delegate/EventDelegator.js";

export class TodoList {

constructor(containerId){
this.container=document.getElementById(containerId)
this.items=new Map()
this.idCounter=0

this.delegator=new EventDelegator(`#${containerId}`)

this.setupEventHandlers()
}

setupEventHandlers(){

this.delegator.on("toggle",({id,completed})=>{
this.toggleItem(id,completed)
})

this.delegator.on("delete",({id})=>{
this.deleteItem(id)
})

this.delegator.on("edit",({id})=>{
this.startEditing(id)
})

this.delegator.on("priority",({id,priority})=>{
this.setPriority(id,priority)
})

}

addItem(text,priority="normal"){

const id=`todo-${++this.idCounter}`

const item={
id,
text,
completed:false,
priority
}

this.items.set(id,item)

this.renderItem(item)

}

renderItem(item){

const div=document.createElement("div")

div.className=`todo-item priority-${item.priority}`

div.dataset.id=item.id

div.innerHTML=`

<input type="checkbox" data-action="toggle">

<span class="todo-text">${item.text}</span>

<button data-action="priority" data-priority="high">High</button>
<button data-action="priority" data-priority="normal">Normal</button>
<button data-action="priority" data-priority="low">Low</button>
<button data-action="edit">Edit</button>
<button data-action="delete">Delete</button>

`

this.container.appendChild(div)

}

toggleItem(id,completed){

const item=this.items.get(id)

if(item){

item.completed=completed

const el=this.container.querySelector(`[data-id="${id}"]`)

el.classList.toggle("completed",completed)

}

}

deleteItem(id){

this.items.delete(id)

const el=this.container.querySelector(`[data-id="${id}"]`)

el.remove()

}

setPriority(id,priority){

const item=this.items.get(id)

if(item){

item.priority=priority

const el=this.container.querySelector(`[data-id="${id}"]`)

el.className=`todo-item priority-${priority}`

}

}

generateItems(count=1000){

const priorities=["high","normal","low"]

for(let i=1;i<=count;i++){

this.addItem(`Task #${i}`,priorities[i%3])

}

}

}