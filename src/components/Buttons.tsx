import React from 'react';
import cn from 'classnames';

type Props = {
  sortBy: (value: string) => void;
  setReverse: () => void;
  reset: () => void;
  sortField: string;
  reverse: boolean;
};

export const Buttons: React.FC<Props> = ({
  sortBy,
  reset,
  sortField,
  reverse,
  setReverse,
}) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className={cn('button', 'is-info', {
          'is-light': sortField !== 'alphabet',
        })}
        onClick={() => sortBy('alphabet')}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        className={cn('button', 'is-success', {
          'is-light': sortField !== 'length',
        })}
        onClick={() => sortBy('length')}
      >
        Sort by length
      </button>

      <button
        type="button"
        className={cn('button', 'is-warning', {
          'is-light': !reverse,
        })}
        onClick={setReverse}
      >
        Reverse
      </button>
      {(sortField || reverse) && (
        <button
          type="button"
          className="button is-danger is-light"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
};
