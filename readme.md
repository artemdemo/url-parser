# URL Parser #

Plugin that help parse URL for GET data

### API ###

**getAll()** - return object of all data
```
http://someurl.com/?appId=1f4d06a3690f46d56bd1da598f65de6f&BID=3051&isTest#/
```
```javascript
{
	appId: "1f4d06a3690f46d56bd1da598f65de6f",
	BID: "3051",
	isTest: null
}
```

**getParam( key )** - return value of given key
```
http://someurl.com/?appId=1f4d06a3690f46d56bd1da598f65de6f&BID=3051&isTest#/
```
```javascript
UrlParser.getParam( "appId" ); // "1f4d06a3690f46d56bd1da598f65de6f"
UrlParser.getParam( "isTest" ); // null
UrlParser.getParam( "notExist" ); // undefined
```

**checkIfExist( key )** - check if given key exists in URL
```
http://someurl.com/?appId=1f4d06a3690f46d56bd1da598f65de6f&BID=3051&isTest#/
```
```javascript
UrlParser.checkIfExist( "appId" ); // true
UrlParser.checkIfExist( "isTest" ); // true
UrlParser.checkIfExist( "notExist" ); // false
```