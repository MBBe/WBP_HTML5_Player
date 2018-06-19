module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            }
        },
        uglify: {
            target: {
                files: {
                    'js/script.min.js': 'js/script.css'
                }
            }
        },

        watch: {
            scripts: {
                files: 'js/*.js',
                tasks: ['default']
            },
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-babel');
    //grunt.loadNpmTasks('grunt-eslint');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'watch']);

};