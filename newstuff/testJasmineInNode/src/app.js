function myMethods(){
    
};
myMethods.prototype.echo=function(input){
    return input;
}
myMethods.prototype.capitalize=function(input){
    return input.toUpperCase();
}
myMethods.prototype.lowercase=function(input){
    return input.toLowerCase();
}
module.exports=myMethods;