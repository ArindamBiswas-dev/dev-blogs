import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContex } from '../../App';

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useContext(UserContex);

  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
