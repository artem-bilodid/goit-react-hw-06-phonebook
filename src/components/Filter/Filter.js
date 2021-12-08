import s from './Filter.module.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter-actions';
import { getFilter } from './../../redux/filter/filter-selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
