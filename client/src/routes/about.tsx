import  { useState, useEffect } from 'react';
import axios from 'axios';
import { createFileRoute } from '@tanstack/react-router';

function AboutComponent() {
  const [message, setMessage] = useState("Initial message");

  const fetchMessage = async () => {
    try {
      const res = await axios.get("/api/hello");
      setMessage(res.data.message);
      console.log("Message", res.data);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  console.log("Message");
  useEffect(() => {
    console.log("Message");
    fetchMessage();
  }, []);

  return (
    <div className="p-2">
      <h3>About</h3>
      <p>{message}</p>
    </div>
  );
}

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});
