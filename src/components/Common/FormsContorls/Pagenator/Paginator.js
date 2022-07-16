import React, { useEffect, useState } from 'react';
import s from './Paginator.module.css';

const Paginator = ({ portionSize = 10, ...props }) => {
  let pagesCount = Math.ceil(props.totalUsers / props.count);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortion = (portionNumber - 1) * portionSize + 1;
  let rightPortion = portionNumber * portionSize;
  useEffect(() => {
    props.setCurrentPage(leftPortion);
  }, [leftPortion]);
  return (
    <div className={s.pagination}>
      <input
        min={1}
        max={portionCount}
        className={s.input}
        type="number"
        onBlur={(e) =>
          (e.currentTarget.value || e.currentTarget.value > 0) &&
          setPortionNumber(e.currentTarget.value)
        }
      />
      {portionNumber > 1 && (
        <button
          className={s.btn}
          onClick={() => {
            setPortionNumber((portionNumber = 1));
          }}>
          Min
        </button>
      )}
      {portionNumber > 1 && (
        <button
          className={s.btn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>
          Prev
        </button>
      )}

      {pages
        .filter((p) => p >= leftPortion && p <= rightPortion)
        .map((p) => {
          return (
            <span
              onClick={(e) => {
                props.setCurrentPage(p);
              }}
              className={props.currentPage === p && s.active}>
              {p}
            </span>
          );
        })}
      {portionNumber < portionCount && (
        <button
          className={s.btn}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}>
          Next
        </button>
      )}
      {portionNumber < portionCount && (
        <button
          className={s.btn}
          onClick={() => {
            setPortionNumber(portionCount);
          }}>
          Max
        </button>
      )}
    </div>
  );
};

export default Paginator;
