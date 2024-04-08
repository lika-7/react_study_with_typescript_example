import React, { FC } from "react";
import {
  LinkProps as RRLinkProps,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import { Link as RRLink } from "react-router-dom";

type LinkProps = RRLinkProps & {};

export const Link: FC<LinkProps> = ({
  className: _className,
  to,
  ...props
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const className = [_className, match ? "btn-active" : ""].join(" ");
  return <RRLink {...props} to={to} className={className} />;
};
