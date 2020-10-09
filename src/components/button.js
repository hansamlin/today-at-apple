import React from "react";

export default function Button({ className, children, href, title }) {
  return (
    <a href={href} title={title} className={className}>
      {children}
    </a>
  );
}
