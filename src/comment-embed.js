/*
 * ALA Embedded Comments
 * https://github.com/alistapart/comment-embed
 *
 * Copyright (c) 2013 A List Apart
 * Licensed under the MIT license.
 */

(function( w, undefined ) {
	// Enable JS strict mode
	"use strict";

	var ala = w.ala,
		initEl = "script",
		o = {
			pluginName : "comment-embed",
			endpoint: "/ala-embed/demo/sample-endpoint.php"
		},
		methods = {
			_init: function(){
				var el = ala( this );

				if( el.data( "init" ) === true ) {
					return false;
				}

				return ala( this )
					.trigger( o.pluginName + "-create" )
					.data( "init", true )
					[ o.pluginName ]( "_fetchData" );
			},
			_injectiframe: function( data ) {
				var iframe = document.createElement( "iframe" ),
					script = ala( this ),
					commentid = script.data( "comment" ),
					prev = ala( this ).prev();

				// Make the iframe seamless-ish.
				iframe.width = "100%";

				iframe.frameborder = "0";
				iframe.style.padding = "0";
				iframe.scrolling = "no";
				iframe.style.border = "none";
				iframe.style.minHeight = "96px";

				if( prev && prev.getAttribute( "id" ) === "comment-" + commentid ) {
					// If the fallback markup is there, replace it.
					this.parentNode.replaceChild( iframe, prev );
				} else {
					// If isn’t there (tsk tsk) insert the iframe before the script element.
					this.parentNode.insertBefore( iframe, this );
				}

				iframe.contentWindow.document.write( data );
				script[ o.pluginName ]( "_handleResize", iframe );
			},
			_fetchData: function() {
				var el = ala( this ),
					commentid = el.data( "comment" );

				ala.ajax( o.endpoint, {
					// We’ll need to enable CORS on the endpoint side for this to work. We could chuck an `src` into the `iframe`, but resizing it would be a lot trickier.
					data: "?id=" + commentid,
					async: false,
					success: function( data ) {
						el[ o.pluginName ]( "_injectiframe", data );
					}
				});
			},
			_handleResize: function( iframe ) {
				var fixHeight = function() {
						iframe.height = iframe.contentWindow.document.getElementById( "comment" ).scrollHeight + 25;
					};
				setTimeout(function() {
					fixHeight();
				}, 100);
				ala( w ).bind( "resize", ala.fn.throttle( fixHeight, 100 ) );
			}
		};

	ala.fn[ o.pluginName ] = function( arrg, a, b, c ) {
		return this.each(function() {
			if( arrg && typeof( arrg ) === "string" ){
				return ala.fn[ o.pluginName ].prototype[ arrg ].call( this, a, b, c );
			}
			if( ala( this ).data( o.pluginName + "data" ) ){
				return ala( this );
			}
			ala( this ).data( o.pluginName + "active", true );
			ala.fn[ o.pluginName ].prototype._init.call( this );
		});
	};

	ala.extend( ala.fn[ o.pluginName ].prototype, methods );

	ala( initEl ).each(function() {
		var el = ala( this );

		if( el.data( "comment" ) ) {
			el[ o.pluginName ]();
		}
	});
}( this ));