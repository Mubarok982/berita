/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_383669827")

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_383669827")

  // remove field
  collection.fields.removeById("file384451396")

  return app.save(collection)
})
