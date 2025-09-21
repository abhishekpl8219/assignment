import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/users?limit=50");
      const json = await data.json();
      console.log("json", json);
      setUsers(json.users);
    } catch (error) {
      toast.error("something went wrong while fetching the users data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Contact">
      <h6>Contact</h6>
      {users.slice(0, 5).map((item, index) => (
        <div className="contactitems">
          {" "}
          <img
            src={item.image}
            alt={item.firstName}
            style={{
              borderRadius: "10px",
              width: "25px",
              border: "1px solid black",
              marginRight: "20px",
            }}
          />
          {item.firstName}
        </div>
      ))}
    </div>
  );
};

export default Contact;
