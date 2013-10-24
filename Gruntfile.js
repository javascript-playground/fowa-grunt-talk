module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      minify: {
        files: {
          'dist/out.js': ['src/*.js']
        }
      },
      withBanner: {
        options: {
          banner: "/*Hello World*/"
        },
        files: {
          'dist/out.js': ['src/*.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/*.js']
    },
    watch: {
      files: ['src/*.js', 'Gruntfile.js'],
      tasks: ['jshint']
    }
  });
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["jshint", "uglify:withBanner"]);
};
