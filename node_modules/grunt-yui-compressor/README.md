# grunt-yui-compressor

A [grunt](https://github.com/cowboy/grunt) plugin for compressing JavaScript and CSS files using YUI Compressor.

## Getting Started

Install the module:

```bash
npm install grunt-yui-compressor
```

Then add this line to your project’s `grunt.js` gruntfile:

```js
grunt.loadNpmTasks('grunt-yui-compressor');
```

Now you can specify CSS/JS files to minify. Here’s a basic example:

```js
'min': {
	'dist': {
		'src': ['src/foo.js', 'src/bar.js'],
		'dest': 'build/foobar.min.js'
	}
},
'cssmin': {
	'dist': {
		'src': ['css/foo.css', 'css/bar.css'],
		'dest': 'build/foobar.min.css'
	}
}
```

Both `min` and `cssmin` use the same API as [the built-in `min` task](https://github.com/cowboy/grunt/blob/master/docs/task_min.md#usage-examples).

## Documentation

This plugin does two things:

* It overrides grunt’s built-in `min` task, and makes it use YUI Compressor instead of UglifyJS.
* It provides a `cssmin` task that uses YUI Compressor to compress CSS files.

Both these tasks are [multi tasks](https://github.com/cowboy/grunt/blob/master/docs/types_of_tasks.md#multi-tasks), meaning that each of them will implicitly iterate over all of its targets if no target is specified.

## FAQ

### Why not just use grunt’s built-in `min` task to minify JavaScript?

Grunt’s built-in `min` task relies on UglifyJS. I love UglifyJS, but it has a few annoying issues and shortcomings:

* It strips license comments of the form `/*! foo */`, only preserving the first comment in the concatenated file. This may cause you to violate licenses of open-source libraries that you’re using in your projects.
* It doesn’t [escape](http://mathiasbynens.be/notes/javascript-escapes) non-printable ASCII characters in the output, potentially leading to hard-to-debug issues. Try minifying `\x0b`, for example.
* There’s no way to make UglifyJS not munge a variable name.

YUI Compressor doesn’t have these issues.

## Release History

* v0.1.1: Create the destination path automatically if needed
* v0.1.0: Initial release

## Contributing

Feel free to fork if you see possible improvements!

In lieu of a formal style guide, take care to maintain the existing coding style. Please lint your code (by simply running `grunt`) before submitting a patch.

## Authors

* [Mathias Bynens](http://mathiasbynens.be/)
  [![@mathias on Twitter](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter")

## License

This project is dual licensed under the [MIT](http://mths.be/mit) and [GPL](http://mths.be/gpl) licenses.