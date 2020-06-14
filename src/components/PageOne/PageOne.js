import React from 'react';
import Navigation from 'components/Common/Navigation/Navigation';

import './PageOne.css'

const PageOne = () => {
  return (
    <div>
      <Navigation />
      <div className="page__content">
        <h1>Page One</h1>
      </div>
    </div>
  );
};

export default PageOne;
