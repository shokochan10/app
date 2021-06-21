import { useState, useEffect, useCallback } from 'react';
let isInitial = true;
const useTable = (tableData) => {
  const [data, setData] = useState(tableData);
  const [currentSort, setCurrentSort] = useState('');

  const requestSort = useCallback(
    (selectedSort) => {
      if (!selectedSort) return;
      if (currentSort === selectedSort + 'Asc') {
        setData((userList) => {
          const oldList = [...userList];
          const newUserList = oldList.sort((first, next) =>
            next[selectedSort] > first[selectedSort] ? 1 : -1
          );
          return newUserList;
        });
        setCurrentSort(selectedSort + 'Desc');
      } else {
        setData((userList) => {
          const oldList = [...userList];
          const newUserList = oldList.sort((first, next) =>
            first[selectedSort] > next[selectedSort] ? 1 : -1
          );
          return newUserList;
        });
        setCurrentSort(selectedSort + 'Asc');
      }
    },
    [currentSort]
  );

  useEffect(() => {
    if (isInitial) {
      requestSort('created');
      isInitial = false;
    }
  }, [requestSort]);

  const requestExpand = (id) => {
    setData((userList) => {
      const userIndex = userList.findIndex((user) => user.id === id);
      const userToExpand = userList.find((user) => user.id === id);
      let updatedUser;
      if (Object.keys(userToExpand).includes('expanded')) {
        updatedUser = { ...userToExpand, expanded: !userToExpand.expanded };
      } else {
        updatedUser = { ...userToExpand, expanded: true };
      }
      const newUserArray = [...userList];
      newUserArray[userIndex] = updatedUser;
      return newUserArray;
    });
  };

  return { data, requestSort, requestExpand, currentSort };
};

export default useTable;
