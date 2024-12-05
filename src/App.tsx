import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodList } from './components/GoodList';
import { Buttons } from './components/Buttons';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [vissibleGoods, setVisibleGoods] = useState<string[]>(goodsFromServer);
  const [sortGoods, setSortGoods] = useState<string>('');
  const [isReversed, setIsReversed] = useState<boolean>(false);

  const sortedGoods = (field: string) => {
    const updatedGoods = [...goodsFromServer];

    if (field) {
      switch (field) {
        case 'alphabet':
          updatedGoods.sort((item1, item2) => item1.localeCompare(item2));
          break;
        case 'length':
          updatedGoods.sort((item1, item2) => item1.length - item2.length);
          break;
        default:
          break;
      }
    }

    setVisibleGoods(updatedGoods);
    setSortGoods(field);
    setIsReversed(false);
  };

  const reverseItems = () => {
    const reversed = [...vissibleGoods].reverse();

    setVisibleGoods(reversed);
    setIsReversed(!isReversed);
  };

  const reset = () => {
    setVisibleGoods([...goodsFromServer]);
    setSortGoods('');
    setIsReversed(false);
  };

  return (
    <div className="section content">
      <Buttons
        sortBy={sortedGoods}
        reset={reset}
        sortField={sortGoods}
        reverse={isReversed}
        setReverse={reverseItems}
      />
      <ul>
        <GoodList goods={vissibleGoods} />
      </ul>
    </div>
  );
};
