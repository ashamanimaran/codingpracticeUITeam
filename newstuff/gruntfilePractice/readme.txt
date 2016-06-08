I saw the same tutorial and I couldn't found min task too. 'min' seems using uglify internally so you can use uglify directly.

mpn install grunt-contrib-uglify --save

decalre task in gruntfile.js

uglify: {
  dist: {
    src: foo.js,
    dest: foo.min.js
  }
}
load plugin

 grunt.loadNpmTasks('grunt-contrib-uglify');
and run

$ grunt uglify