module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'js/core/controllers.js'
                ],
                dest: 'builds/js/scripts.js'
            },
            css: {
                src:
                        [
                            'css/main.css'
                        ],
                dest: 'builds/css/styles.css'
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};