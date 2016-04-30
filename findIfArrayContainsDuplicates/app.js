var nums=[1,2,3,4,3];
//change array size from 500 to 5000 time taken will increase from 3 to 27
var numarr=new Array(500);
for(var i=0;i<numarr.length;i++){
    numarr[i]=-1;
}

for(var i=0;i<nums.length;i++){
    numarr[numarr.length-(i+1)]=nums[nums.length-(i+1)];
}

function findDups(numarr){
   numarr.sort();
   var prev=-1;
  var itr=0;
  var begintime=Date.now();
   numarr.forEach(function(element) {
       if((prev==element)&&(prev!=-1)){
          console.log("match found: "+ element+" in position "+itr);
        } 
        prev=element;
         itr++;
   });
   var endtime=Date.now();
   console.log("no of iterations: "+itr);
   console.log("time taken: "+(endtime-begintime));
}
findDups(numarr);