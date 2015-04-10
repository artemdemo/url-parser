(function(app){

    var urlParser = function() {
        var urlParser;

        var urlParams;

        urlParser = {};
        urlParams = null;

        /**
         * Return value of given key<br>
         * Will return string if value for given key exists, null key has no value, undefined if there is no such key
         *
         * @param key {String}
         * @return {String || null || undefined}
         */
        urlParser.getParam = function( key ) {
            var allObject;

            if ( urlParams.hasOwnProperty(key) ) return urlParams[key];

            allObject = urlParser.getAll();
            if ( allObject.hasOwnProperty( key ) === false ) return undefined;

            return allObject[key];
        };

        /**
         * return object of all data
         *
         * @return {Object}
         */
        urlParser.getAll = function() {
            var newUrlParams;
            var match,
                _param,
                pl     = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query  = window.location.search.substring(1);

            newUrlParams = {};
            while (match = search.exec(query)) {
                _param = decode(match[2]);
                newUrlParams[decode(match[1])] = _param == "" ? null : _param;
            }

            console.log('%cUrl parameters loaded (urlParser)', 'color: green');

            urlParams = newUrlParams;
            return urlParams;
        };

        /**
         * Check if given key exists in URL
         *
         * @param key {String}
         * @return {Boolean}
         */
        urlParser.checkIfExist = function( key ) {
            var allObject;

            if ( urlParams.hasOwnProperty(key) ) return true;

            allObject = urlParser.getAll();
            return allObject.hasOwnProperty( key );
        };

        return {
            // getAll is available in angular.config
            getAll: urlParser.getAll,

            $get: function() {
                // this part is definition of the Factory
                return {
                    getAll: urlParser.getAll,
                    checkIfExist: urlParser.checkIfExist,
                    getParam: urlParser.getParam
                }
            }
        };
    };

    app.provider('urlParser', [urlParser]);

})(your_app_name);