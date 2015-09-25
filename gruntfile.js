module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
        ts: {
            common: {
                src: [
                    'resources/ts/Common/**/*.ts'
                ],
                out: "resources/js/mattoni.js",
                reference: 'resources/ts/Common/references.ts',
                options: {
                    sourceMap: false,
                    declaration: false
                }
            },
            stars: {
                resources: [
                    'resources/ts/Scenes/Stars/**/*.ts',
                    'resources/ts/Scenes/Shared/**/*.ts'
                ],
                out: "resources/js/stars.js",
                reference: 'resources/ts/Scenes/Stars/references.ts',
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
                    cwd: "resources/js/",
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
