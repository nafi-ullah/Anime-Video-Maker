import React from "react";
import styles from "./styles.module.css";

const titlerow: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};

const titlestyle: React.CSSProperties = {
  marginBottom: "0.75em",
  marginTop: "0.75em",
  color: "var(--foreground)",
};

const a: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  flex: 1,
};

const Tip: React.FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
}> = ({ title, description, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={a}>
      <div className={styles.item}>
        <div style={titlerow}>
          <h4 style={titlestyle}>{title}</h4>
          <div className={styles.flex}></div>
          <svg className={styles.icon} height="1em" viewBox="0 0 448 512">
            <path
              fill="var(--foreground)"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
        <p className={styles.p}>{description}</p>
      </div>
    </a>
  );
};

export const Tips: React.FC = () => {
  return (
    <div className={styles.row}>
      nice
    </div>
  );
};
