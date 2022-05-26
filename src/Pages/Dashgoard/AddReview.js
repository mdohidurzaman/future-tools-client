import React from "react";
import { Form } from "react-bootstrap";

const AddReview = () => {
  const handleAddInventory = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const rating = event.target.rating.value;
    const description = event.target.description.value;

    const review = {
      name,
      email,
      rating,
      description,
    };

    //Send data to the server
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        console.log(data);
      });
    alert("Your review is added successfuly");
    event.target.reset();
  };
  return (
    <div className="mx-auto">
      <h2 style={{ color: "#000", marginBottom: "50px", fontSize: "40px" }}>
        Please add a review
      </h2>
      <Form onSubmit={handleAddInventory}>
        <div className="form-group">
          <input
            style={{
              width: "100%",
              border: "1px solid #e2e2e2",
              height: "45px",
              marginBottom: "10px",
              paddingLeft: "5px",
            }}
            type="text"
            name="name"
            id=""
            placeholder="Name"
            required
          />
          <br />
          <input
            style={{
              width: "100%",
              border: "1px solid #e2e2e2",
              height: "45px",
              marginBottom: "10px",
              paddingLeft: "5px",
            }}
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <br />
          <input
            style={{
              width: "100%",
              border: "1px solid #e2e2e2",
              height: "45px",
              marginBottom: "10px",
              paddingLeft: "5px",
            }}
            type="number"
            name="rating"
            id=""
            placeholder="Your rating"
          />
        </div>
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
          placeholder="You comment"
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
          Add a review
        </button>
      </Form>
    </div>
  );
};

export default AddReview;
