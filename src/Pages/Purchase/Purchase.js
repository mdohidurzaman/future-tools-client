import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [id]);
  return (
    <div className="gap-16 grid sm:grid-cols-1 md:grid-cols-3 justify-center">
      <div class="mx-auto block card w-96 bg-base-100 shadow-xl">
        <Link to="/shipping">
          <figure>
            <img src={tools.image} alt="Shoes" />
          </figure>
        </Link>
        <div class="card-body text-default">
          <h2 class="card-title">{tools.name}</h2>
          <p>
            <strong>Description:</strong> {tools.description}
          </p>
          <p>
            <strong>Avalable Quantity:</strong>
            {tools.availableQuantity}
          </p>
          <p>
            <strong>Min Order Quantity:</strong> {tools.minOrderQuantity}
          </p>
          <p>
            <strong>Unit Price:</strong> ${tools.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
