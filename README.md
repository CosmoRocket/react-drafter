
Example module for creating posts/body content 

[react-draft-wysiwyg](https://jpuri.github.io/react-draft-wysiwyg/#/)

[converting to and from raw JS with Draft.js](https://draftjs.org/docs/api-reference-data-conversion.html#content)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Sample output to back-end + db (after converting contentState object to HTML string)

``` javascript
{
	"_id" : ObjectId("5a5848728c39f27072840d59"),
	"updatedAt" : ISODate("2018-01-12T05:32:34.601Z"),
	"createdAt" : ISODate("2018-01-12T05:32:34.601Z"),
	"subject" : "Hello World",
	"contentData" : "<p>The is a sample email!</p>\n",
	"__v" : 0
}
```