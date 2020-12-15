import React, { useEffect, useState } from "react";

const NetworkContext = React.createContext("online");

const NetworkProvider = ({ children }) => {
  const [networkState, setNetworkState] = useState("online");

  useEffect(() => {
    const onOnline = () => setNetworkState("online");
    const onOffline = () => setNetworkState("offline");

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return (
    <NetworkContext.Provider value={networkState}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;

export { NetworkContext };
