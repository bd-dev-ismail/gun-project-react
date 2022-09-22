import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    console.log(modalData) 
    const { gun, cartIncrase } = props;
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
              <div
                onClick={() => cartIncrase()}
                className="btn btn-sm btn-outline btn-primary"
              >
                Add to Cart
              </div>
              <label
                onClick={() => setModalData(gun)}
                htmlFor="my-modal-3"
                className="btn btn-sm btn-outline btn-secondary"
              >
                Show Details
              </label>
            </div>
          </div>
        </div>
        {modalData && <Modal data={modalData} setModalData={setModalData} />}
      </div>
    );
};

export default SingleGun;