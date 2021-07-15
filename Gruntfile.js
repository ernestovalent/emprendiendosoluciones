const sass = require('node-sass');
module.exports = function (grunt) {
	grunt.initConfig({

		//Watch listering all changes
		watch: {
			express: {
				files: ['src/server.js'],
				tasks: ['express:dev'],
				options: {
					spawn: false, // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
					livereload: true
				}
			},
			sass: {
				files: ['src/sass/*.sass'],
				tasks: ['sass_compile'],
				options: {
					livereload: true
				}
			},
			browserSync: {
				files: ['src/*.html', 'src/css/*.css'],
				tasks: ['browserSync'],
				options: {
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
					src: ['src/*.html', 'src/css/*.css']
				},
				options: {
					watchTask: true,
					proxy: "localhost:3000",
					open: false
				}
			}
		},

		// HTML Min
		htmlmin:{
			dist: {
				options: {
					removeComments:true,
					collapseWhitespace:true
				},
				files: {
					"dist/vpn.html":"src/vpn.html"
				}
			},
			dev: {

			}
		},

		autoprefixer: {
			single: {
				src: 'src/vpn.css',
			}
		},

		// Sass compile
		sass: {
			options: {
				implementation: sass,
				outputStyle: "expanded",
				sourceMap: true
			},
			dist: {
				files: {
					'src/css/style.css': 'src/sass/principal.sass'
				}
			}
		},

		cssmin: {
			mini: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['vpn.css'],
					dest: 'dist/css',
					ext:'.min.css'
				}]
			}
		}


	});
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('html', ['htmlmin','sass_compile']);
	grunt.registerTask('sass_compile', ['sass','autoprefixer','cssmin']);
	grunt.registerTask('dev', ['express:dev', 'sass_compile', 'browserSync:dev', 'watch']);
};