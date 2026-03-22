const grunt = require('grunt');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.css': 'src/styles/main.scss'
                }
            }
        },
        
        uglify: {
            dist: {
                files: {
                    'dist/js/main.js': ['src/scripts/main.js']
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: 'dist/',
                    hostname: 'localhost',
                    livereload: true,
                    open: true
                }
            }
        },
        
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['src/styles/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['src/scripts/*.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['copy:html']
            }
        },

        copy: {
            html: {
                expand: true,
                cwd: 'src/',
                src: '*.html',
                dest: 'dist/',
            },
            images: {
                expand: true,
                src: 'images/**',
                dest: 'dist/',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass', 'uglify', 'copy']);
    grunt.registerTask('dev', ['sass', 'uglify', 'copy', 'connect', 'watch']);
};
