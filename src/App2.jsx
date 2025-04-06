import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

const ALPHABETICALLY = 'alphabetically';
const BYLENGTH = 'length';
const REVERSE = 'reverse';

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

export const App = () => {
  const [sortField, setSortField] = useState('');
  let visibleGoods = goodsFromServer;

  visibleGoods = visibleGoods.toSorted((good1, good2) => {
    switch (sortField) {
      case ALPHABETICALLY:
        return good1.name.localeCompare(good2.name);
      case REVERSE:
        return good2.name.localeCompare(good1.name);
      case BYLENGTH:
        return good1.id - good2.id;
      default:
        return 0;
    }
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info "
          onClick={setSortField(ALPHABETICALLY)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={setSortField(BYLENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={setSortField(REVERSE)}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={setSortField('')}
        >
          Reset
        </button>
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
