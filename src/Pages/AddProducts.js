import React from "react";
import { Form } from "react-bootstrap";

const AddProducts = () => {
  const handleAddInventory = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const availableQuantity = event.target.quantity.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const minOrderQuantity = event.target.minQuantity.value;
    const tool = {
      name,
      email,
      price,
      availableQuantity,
      image,
      minOrderQuantity,
      description,
    };

    //Send data to the server
    const url = `http://localhost:5000/tool`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tool),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
    alert("Your product is added successfuly");
    event.target.reset();
  };
  return (
    <div className="contianer w-40 mx-auto login-form">
      <h2 style={{ color: "#000", marginBottom: "50px", fontSize: "50px" }}>
        Please add a product
      </h2>
      <Form onSubmit={handleAddInventory}>
        <input type="text" name="name" id="" placeholder="Name" required />
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="number" name="price" id="" placeholder="Price" />
        <input
          type="number"
          name="minQuantity"
          id=""
          placeholder="Min quantity"
        />
        <input
          type="number"
          name="quantity"
          id=""
          placeholder="Avainable quantity"
        />
        <input type="text" name="image" id="" placeholder="Picture" />
        <textarea
          style={{
            width: "100%",
            height: "50px",
            border: "1px solid #e2e2e2",
            paddingLeft: "5px",
            marginBottom: "20px",
          }}
          type="message"
          name="description"
          placeholder="Description"
        ></textarea>

        <button
          style={{
            backgroundColor: "#6E0B75",
            color: "#fff",
            border: "0",
            fontSize: "18px",
            marginBottom: "50px",
          }}
          className="py-2 px-5"
        >
          Add product
        </button>
      </Form>
    </div>
  );
};

export default AddProducts;
