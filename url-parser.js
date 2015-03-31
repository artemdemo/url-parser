var UrlParser =
	(function(){
		"use strict";

		/**
		 * Main object of the plugin
		 */
		var UrlParser = {};

		/**
		 * Return value of given key<br>
		 * Will return string if value for given key exists, null key has no value, undefined if there is no such key
		 * 
		 * @param key {String}
		 * @return {String || null || undefined}
		 */
		UrlParser.getParam = function( key ) {
			var allObject = this.getAll();
			if ( allObject.hasOwnProperty( key ) === false ) return undefined;
			return allObject[key];
		};

		/**
		 * return object of all data
		 * 
		 * @return {Object}
		 */
		UrlParser.getAll = function() {
			var urlParams;
			var match,
				_param,
				pl     = /\+/g,  // Regex for replacing addition symbol with a space
				search = /([^&=]+)=?([^&]*)/g,
				decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
				query  = window.location.search.substring(1);

			urlParams = {};
			while (match = search.exec(query)) {
				_param = decode(match[2]);
				urlParams[decode(match[1])] = _param == "" ? null : _param;
			}

			return urlParams;
		};

		/**
		 * Check if given key exists in URL
		 * 
		 * @param key {String}
		 * @return {Boolean}
		 */
		UrlParser.checkIfExist = function( key ) {
			var allObject = this.getAll();
			return allObject.hasOwnProperty( key );
		};

		return UrlParser;

	})();

/*UrlParser.checkParam('appId')
UrlParser.checkParam('isTest');*/

/*console.log( UrlParser.getParam('appId') );
console.log( UrlParser.getParam('isTest') );
console.log( UrlParser.getParam('notExist') );*/