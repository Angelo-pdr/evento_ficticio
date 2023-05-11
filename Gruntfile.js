module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    'dist/styles/main.css': 'src/styles/*.less'
                }
            },
        },
        watch: {
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less:development', "less:production"]
            }
        },
    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.registerTask('default', ['watch'])
}