    /*jslint node: true */
    "use strict";

    module.exports = function(grunt) {
     
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      bowercopy: {
        options: {
            // Bower components folder will be removed afterwards
            clean: false
        },
        globSrc: {
            options: {
                destPrefix: 'dist/libs'
            },
            src: '**'
        },
    },

        compress: {
          dist: {
            options: {
              archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
            },
            files: [{
              src: [ 'app/index.html' ],
              dest: '/', 
	      expand: true,
	      flatten: true
            }, {
              src: [ 'app/css/*.css' ],
              dest: 'css/',
	      expand: true,
	      flatten: true
            }, {
              src: [ 'app/partials/*.html' ],
              dest: 'partials/',
	      expand: true,
	      flatten: true
            }, {
              src: [ 'app/js/*.js' ],
              dest: 'js/',
	      expand: true,
	      flatten: true
            }, {
              cwd: 'dist/libs',
              src: [ '**' ],
              dest: 'bower_components',
	      expand: true,
            }]
          }
        }
       
      });
     
      grunt.loadNpmTasks('grunt-contrib-compress');
      grunt.loadNpmTasks('grunt-bowercopy');
     
       grunt.registerTask('package', [ 'bowercopy', 'compress:dist' ]);
    };
