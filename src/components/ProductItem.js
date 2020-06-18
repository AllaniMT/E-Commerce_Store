import React from 'react';

export default function ProductItem() {
  return (
    <div className="card">
      <img src="/images/1.jfif" class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Audi</h5>
        <p className="card-text">Price: 100$</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}
