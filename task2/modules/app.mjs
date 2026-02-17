import { appName } from "./constants.mjs";
import { createElement } from "./utils.mjs";
import { Todo } from "./core.mjs";
import { entries } from "core-js/core/array";

console.log(appName);

const todo= new Todo("Learn ES6 Modules");
document.body.appendChild(createElement("h2", todo.text));

// Import on Interaction
document.getElementById("loadFeature") .addEventListener("click", async ()=>{
    try {
        const module=await import('./advanced_feature.mjs');
        module.showAdvancedFeature();
    } catch (error){
        console.error("Error loading feature", error);
    }
});

// Import on Visibility
const observer= new IntersectionObserver(async(entries)=>{
    if(entries[0].isIntersecting){
        try{
            const module= await import ("./lazy_component.mjs");
            module.loadLazyComponent();
            observer.disconnect();
        } catch(error){
            console.error("Error loading lazy component", error);
        }
    }
});

observer.observe(document.getElementById("lazySection"));