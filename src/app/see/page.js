"use client"
import  { useEffect, useState } from 'react';
import List from '@/components/List/List';
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios({
        method:"get",
        withCredentials:true,
        url: '/api/contect'

      });
      console.log("API Response:", res.data.results); // Add this line for debugging
      setData(res.data.results);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div>
      {
        data.length > 0 ? (
          data.map((item, index) => (
            <List data={item} key={index} />
          ))
        ) : (
          "DB IS EMPTY"
        )
      }
    </div>
  );
};

export default Page;
