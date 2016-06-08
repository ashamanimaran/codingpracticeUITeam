module.exports=function(grunt){
    grunt.initConfig({
      less:{
          files:{
          src:'style.less',
          dest:'style.css'
          }
          }, 
       watch:{
           files:['style.less'],
           tasks:['less']
       } 
    })
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['less']);
}
/*
also works
 less:{
          'style.css': 'style.less'
         }  
*/
/*
Files Object Format
This form supports multiple src-dest mappings per-target, 
where the property name is the destination file, and its value is the source file(s).
 less:{
         build: {
    files: {
        'style.css': 'style.less'
    }

*/ 

/*
Compact Format
This form allows a single src-dest (source-destination) file mapping per-target
  less:{
          files:{
          src:'style.less',
          dest:'style.css'
          }
          }  
*/

/*
Older Formats

The dest-as-target file format is a holdover from before versions.
might be deprecated ---actually does not work anymore
 less:{
   files: {
        'style.css': 'style.less'
    } 
       } 

*/

