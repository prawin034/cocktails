import React from 'react';
import { useGlobalContext } from '../context/Context';
import LoadingSpinner from './LoadingSpinner';
import CockTail from './CockTail';
const CockTailList = () => {
  const { loading, cocktails } = useGlobalContext();

  //LOADING STATE

  if (loading) {
    return <LoadingSpinner />;
  }

  //EMPTY COCKTAIL

  if (cocktails.length < 1) {
    return <h2 className="loading_title">NO COCKTAILS MATCH YOUR CRITERIA</h2>;
  }

  return (
    <section className="cocktail_list">
      <h2 className="cocktail_list_heading">COCKTAILS</h2>
      <div className="cocktail_list_center">
        {cocktails.map((item) => {
          return <CockTail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CockTailList;
