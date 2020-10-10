const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();

connectDB();

const app = express();


app.get('/', (req, res) => {
   res.send('API is Running')
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.get('/api/products', (req, res) => {
   res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p=> p._id === req.params.id)
    res.json(product)
 });


const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));