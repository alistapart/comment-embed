module.exports = function(grunt) {

	var Compressor = require('node-minify').minify;

	grunt.registerHelper('yui-compressor', function(options) {
		var source = grunt.file.expandFiles(options.source),
		    destination = options.destination,
		    max = grunt.helper('concat', source),
		    min;
		// Ugly hack to create the destination path automatically if needed
		grunt.file.write(destination, '');
		// Minify all the things!
		new Compressor({
			'type': 'yui-' + options.type,
			'fileIn': source,
			'fileOut': destination,
			'callback': function(error) {
				if (error) {
					grunt.warn(error);
					return options.fn();
				}
				min = grunt.file.read(destination);
				grunt.log.writeln('File `' + destination + '` created.');
				grunt.helper('min_max_info', min, max);
				// Let grunt know the asynchronous task has completed
				options.fn();
			}
		});
	});

	grunt.registerMultiTask('min', 'Minify JavaScript files with YUI Compressor.', function() {
		grunt.helper('yui-compressor', {
			'type': 'js',
			'source': this.file.src,
			'destination': this.file.dest,
			'fn': this.async()
		});
	});

	grunt.registerMultiTask('cssmin', 'Minify CSS files with YUI Compressor.', function() {
		grunt.helper('yui-compressor', {
			'type': 'css',
			'source': this.file.src,
			'destination': this.file.dest,
			'fn': this.async()
		});
	});

};