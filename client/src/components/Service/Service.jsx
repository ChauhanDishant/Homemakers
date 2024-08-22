import React from "react";
import styles from "./Service.module.css";
export const Service = (props) => {
  const { name, source, description } = props;

  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.content}>
        <img src={require(`./${source}`)} alt={`${name} Service`} />
        <p>{description}</p>
      </div>
    </div>
  );
};
