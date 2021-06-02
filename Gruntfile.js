module.exports = function (grunt) {
	grunt.initConfig({
		
		//Watch listering all changes
		watch: {
			express: {
				files:  [ 'src/server.js' ],
				tasks:  [ 'express:dev' ],
				options: {
					spawn: false, // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
					livereload: true
				}
			}
		},

		// ExpressJS -> Serve to Web app
		express: {
			options: {
				// Override defaults here
			},
			dev: {
				options: {
					script: 'src/server.js'
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: ['src/index.html','src/css/*.css']
				},
				options: {
					watchTask: true,
					proxy: "localhost:3000",
					open: false
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('dev', ['express:dev','browserSync:dev','watch']);
};