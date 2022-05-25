import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body w-96">
            <div class="form-control">
              <input
                disabled
                value={user.email}
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                disabled
                value={user.email}
                type="text"
                placeholder="Email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                type="number"
                placeholder="Phone Number"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
