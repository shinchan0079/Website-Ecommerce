import React from 'react'

const CategoryCard = ({text, imageUrl }) => {
  return (
    <>
        <div className="category-card-outer">
            <div className="category-card">
                <div className="card-img">
                    <img src={imageUrl} alt={text} />
                </div>
                <div className="card-content">
                    <h3>{text}</h3>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryCard