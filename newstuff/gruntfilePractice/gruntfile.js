module.exports=function(grunt){
    grunt.initConfig({
       coffee: {
  compile: {
    files: {
      'file3.js': 'file3.coffee'
       }
  }
  },

   uglify:{
           dist:{
               src:['file1.js','file2.js','file3.js'],
               dest:"all.min.js"
           }
       },
       
       watch: {
  scripts: {
    files: ['*.js','*.coffee'],
    tasks: ['coffee','uglify'],
    },
}
    
    }); 
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks("grunt-contrib-coffee");
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.registerTask('default',['coffee','uglify']);
  
}