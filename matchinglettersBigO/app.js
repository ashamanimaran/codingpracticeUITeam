var str1str="abcdefg";
var str2str="hicdejk";
//var str1=new Array(500);
//var str2=new Array(500);
//when i multiply the number of items by n, the n^2 algorithm will multiply the time taken by n^2
//items=500, time=50 ;    items=500*2, time= 50*4
//items=500,time=50  ;    items=500*3, time= 50*9
//set array size to 500, 1000, 1500 time becomes 50, 175(~50*4), 415 (~50*9)
var str1=new Array(500);
var str2=new Array(500);
for(var i=0;i<str1.length;i++){
    str1[i]="";
}
for(var i=0;i<str2.length;i++){
    str2[i]="";
}
for(var i=0;i<str1str.length;i++){
    str1[str1.length-(i+1)]=str1str[str1str.length-(i+1)];
}
for(var i=0;i<str2str.length;i++){
    str2[str2.length-(i+1)]=str2str[str2str.length-(i+1)];
}
var str3=[];
var itr=0;
//n2 in big O
function findMatch(str1,str2){
    var begintime=Date.now();
    for(var i in str1){
        for(var j in str2){
            itr++
            if(str1[i]==str2[j]){
               str3.push(str1[i]) ;
            }
        }
    }
    var endtime=Date.now();
    console.log(str3.join(""));
    console.log("no of iterations O(n^2):"+itr);
    console.log("time taken: "+(endtime-begintime));
}
findMatch(str1,str2);

//n in big O
var str4=[];
var itr2=0;
function findMatch2(str1,str2){
     var begintime=Date.now();
    for(var i in str1){
        itr2++;
           if(str2.indexOf(str1[i])!=-1){
                str4.push(str1[i]);
            }
    }
     var endtime=Date.now();
    console.log(str4.join(""));
    console.log("no of iterations in O(n): "+itr2);
    console.log("time taken: "+(endtime-begintime));
  
}
findMatch2(str1,str2);

