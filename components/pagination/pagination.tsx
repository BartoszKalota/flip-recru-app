import { PaginationButton } from 'components/pagination-button';
import styles from 'styles/pagination.module.css';

export const Pagination = () => (
  <div className={styles['pagination-section']}>
    <div className={styles['pagination-container']}>
      <PaginationButton type="prev" />
      <PaginationButton type="next" />
    </div>
  </div>
);
