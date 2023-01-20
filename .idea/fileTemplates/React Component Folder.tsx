import styles from "./${NAME}.module.scss";
import { useTranslation } from "react-i18next";

export const $NAME = () => {
  const { t } = useTranslation();

  return <div className={styles.$NAME}>
  </div>;
};
