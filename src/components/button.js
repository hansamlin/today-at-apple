import React from "react";
import PropTypes from "prop-types";

export default function Button({ className, children, href, title }) {
  return (
    <a
      href={href}
      title={title}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
