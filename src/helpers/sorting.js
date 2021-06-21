import sprite from '../assets/sprite.svg';

export const isSelectedSort = (sort, currentSort) => {
  if (currentSort.includes(sort)) {
    return true;
  } else {
    return false;
  }
};

export const sortDirection = (currentSort) => {
  const sort = currentSort.includes('Asc') ? (
    <use href={sprite + '#icon-chevron-up'} />
  ) : (
    <use href={sprite + '#icon-chevron-down'} />
  );
  return sort;
};
