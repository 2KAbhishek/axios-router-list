<div align = "center">

<h1><a href="https://2kabhishek.github.io/axios-router-list">BareMinimum</a></h1>

<a href="https://github.com/2KAbhishek/axios-router-list/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/axios-router-list?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/axios-router-list/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/axios-router-list?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/axios-router-list/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/axios-router-list?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/axios-router-list/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/axios-router-list?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/axios-router-list/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/axios-router-list?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/axios-router-list/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/axios-router-list?style=flat&color=e06c75&label="> </a>

</div>

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
