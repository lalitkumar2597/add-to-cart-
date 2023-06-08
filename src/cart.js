import React from 'react'

const Cart = ({ items, deleteItem }) => {
     const handleDelete = (itemId) => {
       deleteItem(itemId);
     };
  return (
    <>
      <div>
        <h2>Cart</h2>
        <ul>
          {items.map((item, index) => (
            <>
              <li key={index}>{item.name}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;