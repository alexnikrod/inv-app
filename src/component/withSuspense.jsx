import React, { Suspense } from "react";

import loader from '../assets/img/preloader.gif'

export const withSuspense = Component => {
  return props => {
    return (
      <Suspense fallback={<div className="loading"><img src={loader} alt="loading"/> загружается...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

