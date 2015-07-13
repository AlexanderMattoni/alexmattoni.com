module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
        ts: {
            common: {
                src: [
                    'src/ts/Common/**/*.ts'
                ],
                out: "src/js/mattoni.js",
                reference: 'src/ts/Common/references.ts',
                options: {
                    sourceMap: false,
                    declaration: false
                }
            },
            stars: {
                src: [
                    'src/ts/Scenes/Stars/**/*.ts',
                    'src/ts/Scenes/Shared/**/*.ts'
                ],
                out: "src/js/stars.js",
                reference: 'src/ts/Scenes/Stars/references.ts',
                options: {
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                mangle: true,
                compress: true
            },
            common: {
                files: [{
                    expand: true,
                    cwd: "src/js/",
                    src: '**/*.js',
                    dest: "public_html/resources/js/",
                    ext: '.min.js'
                }]
            }
        },
		clean: {
			js: ['public_html/resources/js', 'src/js']
		}
	});

	grunt.registerTask('default', ['clean:js','ts:default','uglify:default']);

    grunt.registerTask('ts-scenes', ['ts:stars', 'uglify']);
    grunt.registerTask('ts-common', ['ts:common', 'uglify']);

};
