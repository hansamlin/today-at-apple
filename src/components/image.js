import React from "react";
import PropTypes from "prop-types";

export default function Image({ phone320, phone375, phone414, pad, web, alt }) {
  return (
    <picture>
      <source srcSet={pad} media="(min-width: 768px) and (max-width: 1199px)" />
      <source
        srcSet={phone414}
        media="(min-width: 414px) and (max-width: 767px)"
      />
      <source
        srcSet={phone375}
        media="(min-width: 375px) and (max-width: 413px)"
      />
      <source srcSet={phone320} media="(max-width: 374px)" />
      <img src={web} alt={alt} />
    </picture>
  );
}

Image.propTypes = {
  phone320: PropTypes.string.isRequired,
  phone375: PropTypes.string.isRequired,
  phone414: PropTypes.string.isRequired,
  pad: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
