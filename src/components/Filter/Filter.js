
import { getFilter } from '../../redux/selectors'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filtersSlice';
import css from './Filter.module.css'
export const Filter = () =>{
    const dispatch = useDispatch()
    const filter = useSelector(getFilter);
    // console.log(filter.filter);

    // const onChange = (e) =>{
    //     const filterEl = e.currentTarget.value.toLowerCase();
    //     dispatch(setFilter(filterEl))
    // }
    return <>
    <label className={css.label}>Find contacts by name</label>
    <input className={css.inputFilter} type="text"
     value={filter.filter} 
     onChange={e => dispatch(setFilter(e.currentTarget.value))}
    ></input>
    </>
};