import { useState, useEffect } from 'react';
import order from '../helpers/order';

const attachProperties = (item, index) => ({
  ...item,
  id: index,
  expanded: false,
});

const useTable = (initialRows, initialSort) => {
  const [rows, setRows] = useState(initialRows.map(attachProperties));
  const [currentSort, setCurrentSort] = useState('');

  const requestSort = (selectedSort) => {
    if (!selectedSort) return;
    if (currentSort === selectedSort + order.ASCENDING) {
      setRows((userList) => {
        const oldList = [...userList];
        const newUserList = oldList.sort((first, next) =>
          next[selectedSort] > first[selectedSort] ? 1 : -1
        );
        return newUserList;
      });
      setCurrentSort(selectedSort + order.DESCENDING);
    } else {
      setRows((userList) => {
        const oldList = [...userList];
        const newUserList = oldList.sort((first, next) =>
          first[selectedSort] > next[selectedSort] ? 1 : -1
        );
        return newUserList;
      });
      setCurrentSort(selectedSort + order.ASCENDING);
    }
  };

  useEffect(() => {
    requestSort(initialSort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestExpand = (id) => {
    setRows((userList) => {
      const userIndex = userList.findIndex((user) => user.id === id);
      const specificUser = userList[userIndex];
      const updatedUser = { ...specificUser, expanded: !specificUser.expanded };
      const newUserArray = [...userList];
      newUserArray[userIndex] = updatedUser;
      return newUserArray;
    });
  };

  return { rows, requestSort, requestExpand, currentSort };
};

export default useTable;
