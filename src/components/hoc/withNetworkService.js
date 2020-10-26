import React from "react";
import NetworkService from "../../services/networkService";

import { NetworkServiceConsumer } from "../networkServiceContext";

const withNetworkService = () => (Wrapped) => {
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

export default withNetworkService;
