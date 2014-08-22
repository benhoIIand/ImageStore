ImageStore
==========

ImageStore is a NodeJS application that stores images via an API, similar to Imgur's RESTful API.

### Requirements

- [NodeJS + NPM](http://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)

### Setup

- Start the MongoDB process by running `mongod`
- Install the necessary NPM modules by running `npm install` in the root of the project
- Start the application by running `node server`
- The root `/` will render a list of the current images
- The API lives at `/api`

### Endpoints

__GET /api/assets__
Returns the list of assets

__GET /api/upload__
Upload an image publically available on the web. This is done by setting the `url` parameter.

E.g.

```
/api/upload?url=http://awesomeashild.files.wordpress.com/2013/10/borat-thumbs-up.jpg
```
