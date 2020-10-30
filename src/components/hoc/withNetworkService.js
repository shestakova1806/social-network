import React from "react";

import { NetworkServiceConsumer } from "../NetworkServiceContext";

export const withNetworkService = () => (Wrapped) => {
  return (props) => {
    return (
      <NetworkServiceConsumer>
        {(networkService) => {
          return <Wrapped {...props} networkService={networkService} />;
        }}
      </NetworkServiceConsumer>
    );
  };
};
