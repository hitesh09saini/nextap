"use client"
import axios from 'axios';
import React, { useState } from 'react';


const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [update, setUpdate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      try {
        const response = await axios({
          method:"post",
          data: {
            name,
            email
          },
          withCredentials:true,
          url: '/api/register'

        });
        if (response) {
          console.log(response);
          setEmail('');
          setName('');
          setUpdate(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className={`bg-black  w-[100px] ${update ? 'text-green-600' : 'text-red-600'} text-center`}>
        DB Status .
      </div>
      <h1 className="text-3xl font-bold mb-4">Add List form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-bold">Name</label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold">Email</label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Page;
