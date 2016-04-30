var str1="abcdefg";
var str2="hicdejk";
var str3=[];
var itr=0;
//n2 in big O
function findMatch(str1,str2){
    for(var i in str1){
        for(var j in str2){
            itr++
            if(str1[i]==str2[j]){
               str3.push(str1[i]) ;
            }
        }
    }
    console.log("*************** "+itr);
    console.log(str3.join(""));
}
findMatch(str1,str2);

//n in big O
var str4=[];
var itr2=0;
function findMatch2(str1,str2){
    for(var i in str1){
        itr2++;
           if(str2.indexOf(str1[i])!=-1){
                str4.push(str1[i]);
            }
    }
    console.log("*************** "+itr2);
    console.log(str4.join(""));
}
findMatch2(str1,str2);

