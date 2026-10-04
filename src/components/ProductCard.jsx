import React from 'react'

export default function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>

      <div className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-image-placeholder">
            No image available
          </div>
        )}
      </div>

      <div className="product-card-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        {product.price && (
          <div className="product-price">
            KSh {product.price.toLocaleString()}
          </div>
        )}

        {product.unit && (
          <span className="product-unit">
            {product.unit}
          </span>
        )}

      </div>

    </article>
  )
}