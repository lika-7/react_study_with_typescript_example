import React, { FC, ReactNode } from "react";

type PProps = {
  children: ReactNode;
};

const P: FC<PProps> = ({ children }) => {
  return <p children={children} />;
};

export default P;
