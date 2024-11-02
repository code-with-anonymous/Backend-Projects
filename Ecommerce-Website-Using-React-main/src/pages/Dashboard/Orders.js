// Orders.jsx
import React, { useEffect, useState } from 'react';
import { Table, message } from "antd";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config'; 
import { useAuth } from '../../contexts/AuthContext';

const Orders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          where("sellerUid", "==", currentUser.uid)
        );
        const orderSnapshot = await getDocs(q);
        const orderList = orderSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(orderList);
        console.log(orders)
      } catch (error) {
        message.error(`Error fetching orders: ${error.message}`);
      }
    };
    fetchOrders();
  }, [currentUser]);

  return (
    <main className='m-5'>
      <Table dataSource={orders} rowKey="id">
      <Table.Column title="Product Name" dataIndex="productName" />
      <Table.Column title="Buyer Email" dataIndex="buyerEmail" />
      <Table.Column title="Status" dataIndex="status" />
      <Table.Column title="Actions" render={(_, record) => (
        <span>{record.status}</span>
      )} />
    </Table>
    </main>
  );
};

export default Orders;
