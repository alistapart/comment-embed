/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

	var ala = window.ala;

	module('Utilities', {
		setup: function() {

		}
	});

	test('Selector', 4, function() {
		var obj = {
			test : "test"
		},
		ready = function( e ) {
			return true;
		};

		strictEqual( ala()[ 0 ], document, "Passing nothing returns the wrapped document." );
		strictEqual( Object.prototype.toString.call( ala( ".each" ) ), "[object Array]", "Passing a string returns array of elements." );
		strictEqual( ala( obj )[ 0 ], obj, "Passing an object returns the wrapped object." );
		ok( ala( ready ), "Passing a function acts as a doc.ready shortcut.");
	});

	test('Data', 3, function() {
		ok( ala( ".data" ).data( "test" ) === undefined, "Nothing explodes when you try to get data from a dataless element." );

		ala( ".data" ).data( "test", "testdata" );
		ok( ala( ".data" ).data( "test" ) === "testdata", "Getting works." );

		ala( ".data" ).data( "test", "retest-data" );
		ok( ala( ".data" ).data( "test" ) === "retest-data", "Re-setting works." );
	});

	test('Plugin Tests', 0, function() {
		var test1 = document.getElementById( "test1" ),
			test2 = document.getElementById( "test2" );

//		window.console.log( test1.previousSibling );
//		window.console.log( test2.previousSibling );

		//ok( undefined === undefined, "Nothing explodes when you try to get data from a dataless element." );
		//ok( ala( ".data" ).data( "test" ) === undefined, "Nothing explodes when you try to get data from a dataless element." );

	});

}(jQuery));
