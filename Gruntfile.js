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
    jasmine: {
      test: {
        src: 'src/*.js',
        options: {
          specs: 'spec/*.js'
        }
      }
    },
    watch: {
      files: ['src/*.js', 'Gruntfile.js'],
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
