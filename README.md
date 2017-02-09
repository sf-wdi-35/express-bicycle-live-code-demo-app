## Bicycles API - Express live code demo app

#### Setup
Clone this project, and `cd` into the project directory.

``` bash
# in a separate tab, run the db process so it's always on
mongod

# in a separate tab, run the express server so it's always on
node server.js
# or
nodemon server.js

# seed the database with bicycles
node seed.js

# launch the home page in your browser
open http://localhost:3000/
```

Finally, we recommend you use [Postman](https://www.getpostman.com/) to simulate API requests. Make sure that you select `x-www-form-urlencoded` when you `post` content to the `bicycle#create` endpoint (see [body-parser](https://www.npmjs.com/package/body-parser)).

#### HTML Endpoints
- get `/` -- bicycle index

#### JSON API Endpoints
- `get` `/api/bicycles` - bicycle#index
- `get` `/api/bicycles/:id` - bicycle#show
- `post` `/api/bicycles` - bicycle#create
- `put` `/api/bicycles/:id` - bicycle#update
- `delete` `/api/bicycles/:id` - bicycle#destroy


