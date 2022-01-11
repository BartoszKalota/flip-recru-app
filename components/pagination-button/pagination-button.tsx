import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styles from 'styles/pagination-button.module.css';

interface IProps {
  type: 'prev' | 'next';
}

export const PaginationButton = ({ type }: IProps) => (
  <Button
    className={styles.button}
    shape="circle"
    size="large"
    icon={type === 'next' ? <RightOutlined /> : <LeftOutlined />}
  />
);
