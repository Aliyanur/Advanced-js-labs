'use strict';

function namespace(ns){
    var parts=ns.split('.');
    var parent = MyLib;

    for (var i=0; i < parts.length; i++){
        if(!parent[parts[i]]){
            parent[parts[i]]={};
        }
        parent=parent[parts[i]];
    }

    return parent;
}

var MyLib={
    version: '1.0.0',
    namespace: namespace
};

namespace('utilis.array');
namespace('utilis.string');
namespace('utilis.object');
namespace('dom.element');

MyLib.utilis.array.unique= arr => [...new Set(arr)];
MyLib.utilis.array.chunk = (arr, size)=>{
    let res=[];
    for (let i = 0; i < arr.length; i += size){
        res.push(arr.slice(i, i+size));
    }
    return res;
};

MyLib.utilis.string.capitalize = str => str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase();

MyLib.utilis.object.pick = (obj, keys)=>{
    let res={};
    keys.forEach(k => {
        if (obj[k]) res[k]=obj[k];
    });
    return res;
};

MyLib.dom.element.get=selector=> document.querySelector(selector);
module.exports=MyLib;