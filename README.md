# Cool - Memo

## Setup

```sh
npm install
```

## Usage
run server
```sh
npm start
```

## API Address
link | description
-----| -----------
`curl -X GET "http://localhost:3000/api"` | Get all memo data
`curl -X POST "http://localhost:3000/api" -d "title=newTitle&content=newContent&tags=newTags"` | Create new memo
`curl -X PUT "http://localhost:3000/api/:id" -d "title=newTitle&content=newContent&tags=newTags"` | Update memo
`curl -X DELETE "http://localhost:3000/api/:id"` | Delete a memo

## GUI Address
link | description
-----| -----------
`http://localhost:3000/` | Create new memo
`http://localhost:3000/list` | View all memo
`http://localhost:3000/update/:id` | Update memo
`http://localhost:3000/delete/:id` | Delete a memo
`http://localhost:3000/ajax` | Ajax page CRD operations


## License
```sh
MIT
```
### Copyright
2016 ahyanarizky
