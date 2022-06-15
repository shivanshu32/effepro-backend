const MongoClient = require('mongodb').MongoClient;

const url =
'mongodb+srv://Shivanshu-pathak-effectual:shivanshu-pathak-effectual@cluster0.sdiwr.mongodb.net/effeprodb?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection('DatasetImport').find().toArray();
    
  } catch (error) {
    console.log(error);
    return res.json({message: 'Could not retrieve products.'});
  };
  client.close();

  res.json(products);
 
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;