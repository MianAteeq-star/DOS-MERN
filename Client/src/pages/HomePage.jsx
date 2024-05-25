import React, { useEffect } from "react";
import axios from "axios";

function HomePage() {
  const getUserData = async (req, res) => {
    try {
      await axios.post(
        "/api/auth/userData",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <h1>HomePage</h1>;
}

export default HomePage;
