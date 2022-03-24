import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions, selectVisiblePostions} from "../store/positions/position-selectors";
import {addFilter} from "../store/filters/filter-actions";
import {selectFilters} from "../store/filters/filter-selector";

const JobList = () => {

    const currentFilters = useSelector(selectFilters)
    const positions = useSelector(state => selectVisiblePostions(state, currentFilters))
    const dispatch = useDispatch()

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }


    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} {...item} handleAddFilter={handleAddFilter}/>
            ))}
        </div>
    )
}

export {JobList};
