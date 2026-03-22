const grunt = require('grunt');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            options: {
                implementation: require('sass'),
                sourceMap: false
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.css': 'dev/src/styles/main.scss'
                }
            }
        },
        
        uglify: {
            dist: {
                files: {
                    'dist/js/main.js': ['dev/src/scripts/main.js']
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
                files: ['dev/src/styles/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['dev/src/scripts/*.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['dev/*.html', 'dev/pages/*.html'],
                tasks: ['copy:html']
            }
        },

        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'dev/',
                        src: 'index.html',
                        dest: 'dist/',
                    },
                    {
                        expand: true,
                        cwd: 'dev/pages/',
                        src: '*.html',
                        dest: 'dist/pages/',
                    }
                ]
            },
            images: {
                expand: true,
                cwd: 'dev/src/',
                src: 'images/**',
                dest: 'dist/',
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass', 'uglify', 'copy']);
    grunt.registerTask('dev', ['sass', 'uglify', 'copy', 'connect', 'watch']);
};
