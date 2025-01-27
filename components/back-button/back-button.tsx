import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from 'styles/back-button.module.css';

interface IProps {
  onBack: () => void;
}

export const BackButton = ({ onBack }: IProps) => (
  <Button
    className={styles['back-button']}
    style={{ position: 'absolute' }}
    shape="circle"
    size="large"
    color="primary"
    icon={<LeftOutlined data-testid="left-arrow-icon" />}
    onClick={onBack}
    data-testid="back-button"
  />
);
