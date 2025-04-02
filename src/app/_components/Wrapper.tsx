"use client";

import { useEffect } from "react";
import { serviceWorkerRegister } from "~/app/_serviceworker/swDev";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    serviceWorkerRegister();
  }, []);
  return <div>{children}</div>;
};

export default Wrapper;
