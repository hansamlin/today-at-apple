import React from "react";
import PropTypes from "prop-types";
import styles from "./card-classes.module.scss";
import Image from "../image";
import Link from "../link";

export default function Card({
  src,
  title,
  linkText,
  href,
  relatedHref,
  disabled,
}) {
  const className = disabled
    ? `${styles.container} ${styles.disabled}`
    : styles.container;

  const card = (
    <div className={className}>
      <i className={styles.icon} />
      <figure>
        <Image
          phone320={src.phone320}
          phone375={src.phone375}
          phone414={src.phone414}
          pad={src.pad}
          web={src.web}
          alt={title}
        />
      </figure>
      <figcaption>
        <h3>{title}</h3>

        {disabled && <span className={styles.willOpen}>將於11月開課</span>}

        <span className={styles.nt}>
          NT. <span>0</span>
        </span>
      </figcaption>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {disabled ? (
        card
      ) : (
        <a href={href} title={title} target="_blank" rel="noopener noreferrer" className={styles.target}>
          {card}
        </a>
      )}

      <a
        href={relatedHref}
        title={`${linkText} 相關課程`}
        className={styles.related}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Link>{`${linkText} 相關課程`}</Link>
      </a>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.shape({
    phone320: PropTypes.string,
    phone375: PropTypes.string,
    phone414: PropTypes.string,
    pad: PropTypes.string,
    web: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  relatedHref: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
