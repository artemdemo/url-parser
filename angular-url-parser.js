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
         * Return object with all GET data from the URL
         * @return {Object}
         */
        urlParser.getAll = function() {
            var urlParams;
            var match,
                _param,
                pl     = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query  = window.location.href,
                qMarkIndex = query.indexOf('?'),
                hashIndex = query.indexOf('#/');

            hashIndex = hashIndex == -1 ? 0 : hashIndex;

            // It can be 2 different cases:
            // 1) http://someurl.com/app/?param1=somedata#/pagename
            // 2) http://someurl.com/app/#/pagename?param1=somedata
            // In both ways it should work properly
            // Therefore I'm cutting only relevant part from the URL - part between # and ?
            switch(true) {
                case qMarkIndex > hashIndex:
                    query = query.substr( qMarkIndex + 1 );
                    break;
                case qMarkIndex < hashIndex:
                    query = query.substr( qMarkIndex + 1 , hashIndex - qMarkIndex - 1 );
                    break;
            }

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