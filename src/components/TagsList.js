import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORY_LIST_API } from '../utils/constants';

const TagsList = () => {
  const [categoryList, setCategoryList] = useState([]);

  const { isOpen } = useSelector((store) => store.sidenav);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const data = await fetch(CATEGORY_LIST_API);
    const response = await data.json();
    const items = response.items;
    setCategoryList(items);
  };

  return (
    categoryList.length && (
      <div
        className={`overflow-x-auto m-auto flex flex-nowrap gap-4 h-20 items-center ${
          isOpen ? 'max-w-[81vw]' : 'max-w-[95vw]'
        }`}
      >
        {categoryList?.map((category) => {
          return (
            <p
              className='px-3 py-2 text-sm font-medium h-fit min-w-fit bg-gray-200 rounded-lg'
              key={category.id}
            >
              {category.snippet.title}
            </p>
          );
        })}
      </div>
    )
  );
};

export default TagsList;
