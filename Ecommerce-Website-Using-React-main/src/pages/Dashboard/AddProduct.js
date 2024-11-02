import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Card, Select } from "antd";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"; 
import { useAuth } from '../../contexts/AuthContext';
import { db, storage } from '../../firebase/config';


const { TextArea } = Input;
const { Option } = Select;

const AddProduct = () => {
  const { currentUser } = useAuth();
  const [isSpin, setSpin] = useState(false);
  const [form] = Form.useForm(); // Create a form instance

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    image: null,
    description: "",
  });

  const handleAddProduct = async () => {
    setSpin(true);

    try {
      let imageURL = "";
      if (product.image) {
        const imageRef = ref(storage, `products/${Date.now()}_${product.image.name}`);
        await uploadBytes(imageRef, product.image);
        imageURL = await getDownloadURL(imageRef);
      }

      const productData = {
        name: product.name,
        category: product.category,
        price: product.price,
        image: imageURL,
        description: product.description, // Add description to product data
        sellerUid: currentUser.uid,
      };

      await addDoc(collection(db, "products"), productData);
      message.success("Product added successfully!");
      setSpin(false);
      setProduct({ name: "", category: "", price: 0, image: null, description: "" }); // Reset form
      form.resetFields(); 
    } catch (error) {
      message.error(`Error: ${error.message}`);
      setSpin(false); 
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <Card style={{ padding: 24, maxWidth: 600, margin: 'auto' }}>
        <Form form={form} layout="vertical" onFinish={handleAddProduct}>
          <Form.Item label="Product Name" name="name" required>
            <Input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
          </Form.Item>
          <Form.Item label="Price" name="price" required>
            <Input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
          </Form.Item>
          <Form.Item label="Category" name="category" required>
            <Select 
              value={product.category} 
              onChange={(value) => setProduct({ ...product, category: value })}
              placeholder="Select a category"
            >
              <Option value="electronics">Electronics</Option>
              <Option value="clothing">Clothing</Option>
              <Option value="home_appliances">Home Appliances</Option>
              <Option value="toys">Toys</Option>
              <Option value="books">Books</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description" name="description" required>
            <TextArea 
              rows={4} 
              value={product.description} 
              onChange={(e) => setProduct({ ...product, description: e.target.value })} 
              placeholder="Enter product description"  
            />
          </Form.Item>
          <Form.Item label="Product Image" name="image">
            <Upload beforeUpload={(file) => { setProduct({ ...product, image: file }); return false; }}>
              <Button>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSpin}>
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddProduct;