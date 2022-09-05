import styles from './ButtonWrapper.module.css';

const ButtonWrapper = ({text, btn: Button}) => {
  return (
    <div className={styles.wrappCont}>
      <p>{text}</p>
      {Button}
    </div>
  );
};

export default ButtonWrapper;