import PaginationButton from 'components/pagination-button';
import styles from 'styles/pagination.module.css';

interface IProps {
  isPrevPageAvailable: boolean;
  isNextPageAvailable: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  isPrevPageAvailable,
  isNextPageAvailable,
  currentPage,
  setCurrentPage,
}: IProps) => {
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles['pagination-section']}>
      <div className={styles['pagination-container']}>
        <PaginationButton
          type="prev"
          isDisabled={!isPrevPageAvailable}
          onPageChange={handlePrevPage}
        />
        <span
          className={styles['pagination-number']}
          data-testid="current-page">
          {currentPage}
        </span>
        <PaginationButton
          type="next"
          isDisabled={!isNextPageAvailable}
          onPageChange={handleNextPage}
        />
      </div>
    </div>
  );
};
