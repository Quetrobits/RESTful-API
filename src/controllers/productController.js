const products = [];

const getAllProducts = (req, res) => {
    res.status(200).json({ success: true, data: products });
  };

  const getProductById = (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  };

  const createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
  };
  
  const updateProduct = (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    const { name, price } = req.body;
    product.name = name || product.name;
    product.price = price || product.price;
    res.status(200).json({ success: true, data: product });
  };

  const deleteProduct = (req, res) => {
    const index = products.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    products.splice(index, 1);
    res.status(200).json({ success: true, message: 'Product deleted' });
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };