import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ZIPE_STORAGE_KEY } from "consts";
import { routes } from "routes";

const defaultProps = {};

type PrivateRouteType = {
  children: React.ReactNode;
  path: string | string[];
  exact: boolean;
} & typeof defaultProps;

export function PrivateRoute({
  children,
  path,
  exact,
  ...rest
}: PrivateRouteType) {
  return (
    <Route
      {...rest}
      exact={exact}
      render={({ location }) =>
        localStorage.getItem(ZIPE_STORAGE_KEY) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
