import { mdiMenu, mdiHomeOutline, mdiPlus, mdiCircleSlice3, mdiBellOutline, mdiCogOutline } from '@mdi/js';
import Icon from '@mdi/react';
import SearchBar from './SearchBar';

function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary-color">
                    <div className=" d-flex flex-row justify-content-between w-100">
                        <div className="d-flex">
                            <Icon path={mdiMenu}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-2"
                            />
                            <Icon path={mdiHomeOutline}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-2"
                            />
                            <SearchBar/>
                        </div>
                        <div>
                            <Icon path={mdiPlus}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-3 me-2"
                            />
                            <Icon path={mdiCircleSlice3}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-3 me-2"
                            />
                            <Icon path={mdiBellOutline}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-3 me-2"
                            />
                            <Icon path={mdiCogOutline}
                              size = {0.9}
                              color = 'snow'
                              className = "m-1 ms-3 me-2"
                            />
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar