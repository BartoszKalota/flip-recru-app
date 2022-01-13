import { Spin } from 'antd';
import styles from 'styles/loader.module.css';

export const Loader = () => (
  <div className={styles['loader-container']}>
    <Spin data-testid="spin" />
  </div>
);
