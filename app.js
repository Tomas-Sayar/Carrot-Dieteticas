const express = require('express');
const methodOverride = require("method-override");
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const cors = require('cors');

//const logMiddleware = require('./middlewares/logMiddleware');
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');
const session = require('express-session');

//API REQUIRE
const productsApi = require('./routers/api/productsApi');
const usersApi = require('./routers/api/usersApi');
const categoriesApi = require('./routers/api/categoriesApi');
const totalsApi = require('./routers/api/totalsApi');
const typesApi = require('./routers/api/typesApi');

//middleware para aceptar request de tu localhost proyecto
app.use(cors());

// APP CONFIG CARPETA ESTATICA 
app.use(express.static(publicPath));
app.set('view engine', 'ejs');


// APP CONFIG FORMULARIOS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//LOGIN SESSION CONFIG
app.use(session({ secret: "carrotTommyFer", resave: true, saveUninitialized: true }));
//app.use(logMiddleware);


// SERVER
app.listen(3030, () => {
	console.log('el servidor esta corriendo en el puerto 3030');
});

// ROUTERS
//API ROUTES
app.use('/api/productos', productsApi);
app.use('/api/usuarios', usersApi);
app.use('/api/categorias', categoriesApi);
app.use('/api/totals', totalsApi);
app.use('/api/types', typesApi);

// MAIN
app.use('/', mainRouter);
// PRODUCTS
app.use('/products', productsRouter);
//USERS
app.use('/users', usersRouter);



//ERROR 404
app.use((req, res, next) => {
	res.status(404).render("not-found")
});