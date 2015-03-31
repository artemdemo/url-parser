# URL Parser #

Plugin that help parse URL for GET data

### Proposed API ###

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
getParam( "appId" ); // "1f4d06a3690f46d56bd1da598f65de6f"
getParam( "isTest" ); // null
getParam( "notExist" ); // undefined
```

**checkParam( key )** - check if given key exists in URL
```
http://someurl.com/?appId=1f4d06a3690f46d56bd1da598f65de6f&BID=3051&isTest#/
```
```javascript
getParam( "appId" ); // true
getParam( "isTest" ); // true
getParam( "notExist" ); // false
```