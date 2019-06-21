import React from 'react';

export default function(props) {
  const item = props.items.find(i => String(i.id) === props.match.params.id);

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <p className='item-description'>{item.description}</p>
    </div>
  );
}
