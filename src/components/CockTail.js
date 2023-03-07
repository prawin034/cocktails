import React from 'react';
import { Link } from 'react-router-dom';
const CockTail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="cocktail_img">
        <img className="cocktail_img_img" src={image} alt={name} />
      </div>
      <div className="cocktail_footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <span>{info}</span>
        <Link className="cocktail_footer_btn" to={`/cocktail/${id}`}>
          DETAILS
        </Link>
      </div>
    </article>
  );
};

export default CockTail;
