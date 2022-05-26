import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTools from "../../Hooks/useTools";
import Loading from "../../Components/Shared/Loading";

const Products = () => {
  const [tools] = useTools();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="container grid justify-center py-16">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="gap-16 grid sm:grid-cols-1 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool._id} class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={tool.image} alt="Hand tools" />
              </figure>
              <div class="card-body justify-center">
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
                <div class="card-actions">
                  <button
                    onClick={() => navigateToPurchase(tool._id)}
                    class="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
