import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTools from "../../Hooks/useTools";
import Loading from "../../Components/Shared/Loading";

const Products = () => {
  const [tools] = useTools();
  console.log(tools);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const navigateToInventoryDetails = (id) => {
    navigate(`/service/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="gap-16 grid sm:grid-cols-1 md:grid-cols-3 ">
          {tools.map((tool) => (
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={tool.image} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>
                  <strong>Description:</strong> {tool.description}
                </p>
                <p>
                  <strong>Avalable Quantity:</strong>
                  {tool.availableQuantity}
                </p>
                <p>
                  <strong>Min Order Quantity:</strong> {tool.minOrderQuantity}
                </p>
                <p>
                  <strong>Unit Price:</strong> ${tool.price}
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Link to="/manageitems">
          <button className="manage-btn">Manage Invertories</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
