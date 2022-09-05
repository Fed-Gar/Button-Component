import MaterialIcon from 'react-google-material-icons';

import styles from './Button.module.css';

const Button = (props) => {
  const {
    text,
    variant,
    disabledShadow,
    color,
    startIcon,
    endIcon,
    size,
  } = props;

  return (
    <button 
      {...props} 
      className={
        `${styles.defaultBtn} 
        ${variant ? styles[variant] : ''}
        ${disabledShadow ? styles['disabledShadow'] : ''}
        ${color ? styles[color] : ''}
        ${size ? styles[size] : ''}
      `}>
      {startIcon ? <MaterialIcon icon={startIcon} size={20}/> : ''}
      {text ? text : 'Default'}
      {endIcon ? <MaterialIcon icon={endIcon} size={20}/> : ''}
    </button>
  );
};

export default Button;