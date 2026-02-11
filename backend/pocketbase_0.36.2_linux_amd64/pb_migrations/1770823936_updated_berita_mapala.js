/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_383669827")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file384451396",
    "maxSelect": 10,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "galeri",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [
      "1000x720"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_383669827")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file384451396",
    "maxSelect": 10,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "galeri",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
