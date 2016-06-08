window.onload=function(){
  var comptemplate=document.querySelector("template#simplecomponent").content;
  var comp=comptemplate.cloneNode(true);
 // var comp=document.importNode(comptemplate,true);
 document.getElementById("simplecontent").appendChild(comp);
  console.log(comp);
}