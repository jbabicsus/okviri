import React, { useEffect } from "react";
import axios from 'axios';
import Layout from "../komponente/Layout";
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector(state => state.user); // Get user data from Redux state

  const getData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/user/get-user-info-by-id', { userId: user._id }, // Assuming user data has an _id property
        {
          headers: {
            Authorization: Bearer ${token}
          }
        }
      );
      console.log(response.data); // For debugging
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  );
}

export default Home;