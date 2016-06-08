var templateString="<h1>{{heading}}</h1>"
var context={
    heading:"This is the heading"
}
var template=Handlebars.compile(templateString);
var htmlgenerated=template(context);
$(document).ready(function(){
     $("body").html(htmlgenerated);

}  
)