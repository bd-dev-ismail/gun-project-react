import React from 'react';

const SingleGun = (props) => {
    console.log(props)
    const {gun} = props;
    const { name, img, action, price, capacity } = gun;
    return (
      <div>
        <div className="card w-full border h-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-56" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">Price: {price}</div>
            </h2>
            <p className="text-start">Action: {action}</p>
            <p className="text-start">Capacity: {capacity}</p>
            <div className="card-actions justify-end">
              <div className="btn btn-sm btn-outline btn-primary">Buy Now</div>
              <div className="btn btn-sm btn-outline btn-secondary">Show Details</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleGun;