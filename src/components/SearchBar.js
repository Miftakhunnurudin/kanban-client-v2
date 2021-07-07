import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

function SearchBar () {
    return (
        <div className="bg-search p-1 ms-2">
            <Icon path={mdiMagnify}
                size = {0.9}
                color = 'snow'
                className = "me-1"
            />
            <input type="search" />
        </div>
    )
}

export default SearchBar