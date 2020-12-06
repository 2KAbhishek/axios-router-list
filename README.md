# axios-router-list

![Size](https://img.shields.io/github/repo-size/2kabhishek/axios-router-list?style=plastic&color=0f0&label=Size)
![Updated](https://img.shields.io/github/last-commit/2kabhishek/axios-router-list?style=plastic&color=f00&label=Updated)
![Stars](https://img.shields.io/github/stars/2kabhishek/axios-router-list?style=plastic&color=ffc801&label=Stars)
![Forks](https://img.shields.io/github/forks/2kabhishek/axios-router-list?style=plastic&color=003cff&label=Forks)
![Watchers](https://img.shields.io/github/watchers/2kabhishek/axios-router-list?style=plastic&color=ff5500&label=Watchers)
![Contributors](https://img.shields.io/github/contributors/2kabhishek/axios-router-list?style=plastic&color=f0f&label=Contributors)
![License](https://img.shields.io/github/license/2kabhishek/axios-router-list?style=plastic&color=555&label=License)

React app to generate Product List using Axios from JSON server with routing using React Router.
The data is stored in `src/db.json`.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `node, npm`

## Getting axios-router-list

To get axios-router-list, follow these steps:

```bash
git clone https://github.com/2kabhishek/axios-router-list
cd axios-router-list
npm install # Intall dependencies
./nod_modules/.bin/json-server -w ./src/db.json -p 4000 # Run project installation of json-server on port 4000
npm start # Runs live on localhost:3000
npm test # Runs tests
```

## Using axios-router-list

Copy required Components into your project structure and include them in your jsx.

```jsx
import AllProductsPage from Components/AllProductsPage/AllProductsPage

// Other jsx code
    <AllProductsPage />
// Code continues
```

Hit the :star: button if you found this useful.

### More Info

Builds on [json-list](https://github.com/2kabhishek/json-list) by adding Axios and React Router support.
