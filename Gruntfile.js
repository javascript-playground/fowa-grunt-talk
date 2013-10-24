module.exports = function(grunt) {
  grunt.initConfig({
    srcFiles: "src/*.js",
    outFile: "dist/out.js",
    uglify: {
      minify: {
        files: {
          '<%= outFile %>': ['<%= srcFiles %>']
        }
      },
      withBanner: {
        options: {
          banner: "/*Hello World*/"
        },
        files: {
          '<%= outFile %>': ['<%= srcFiles %>']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', '<%= srcFiles %>']
    },
    jasmine: {
      test: {
        src: '<%= srcFiles %>',
        options: {
          specs: 'spec/*.js'
        }
      }
    },
    watch: {
      files: ['<%= srcFiles %>', 'Gruntfile.js'],
      tasks: ['default']
    },
    concurrent: {
      target1: ['jasmine', 'jshint'],
    }
  });
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-notify");
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.registerTask("default", ["concurrent:target1", "uglify:withBanner"]);
};
