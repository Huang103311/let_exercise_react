import "@/styles/reset.scss";
import "@/styles/base.scss";
import styles from "./AuthInput.module.scss";

const AuthInput = ({ label, type, value, placeholder, onChange }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </>
  );
};

export default AuthInput;
