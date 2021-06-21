import { useState, useEffect, useCallback } from 'react';

let isInitial = true;

const useTable = (tableData) => {
  const [data, setData] = useState(null);
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
      const updatedData = tableData.map((item, index) => {
        return { ...item, id: index, expanded: false };
      });
      setData(updatedData);
      requestSort('created');
      isInitial = false;
    }
  }, [requestSort, tableData]);

  const requestExpand = (id) => {
    setData((userList) => {
      const userIndex = userList.findIndex((user) => user.id === id);
      const specificUser = userList[userIndex];
      const updatedUser = { ...specificUser, expanded: !specificUser.expanded };
      const newUserArray = [...userList];
      newUserArray[userIndex] = updatedUser;
      return newUserArray;
    });
  };

  return { data, requestSort, requestExpand, currentSort };
};

export default useTable;
