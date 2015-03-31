var UrlParser =
	(function(){
		"use strict";

		/**
		 * Main object of the plugin
		 */
		var UrlParser = {};

		/**
		 * Return value of given key<br>
		 * Will return string if value for given key exists or null if not
		 * 
		 * @param key {String}
		 * @return {String || null}
		 */
		UrlParser.getParam = function( key ) {
			var match = RegExp('[?&]' + key + '=([^&]*)').exec(window.location.href);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}

		return UrlParser;

	})();

console.log( UrlParser.getParam('appId') );