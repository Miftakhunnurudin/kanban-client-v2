import { mdiMenu, mdiHomeOutline, mdiPlus, mdiCircleSlice3, mdiBellOutline, mdiCogOutline } from '@mdi/js';
import Icon from '@mdi/react';

function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary-color">
                    <div className=" d-flex flex-row justify-content-between w-100">
                        <div>
                            <Icon path={mdiMenu}
                            size = {0.9}
                            color = 'snow'
                            />
                            <Icon path={mdiHomeOutline}
                            size = {0.9}
                            color = 'snow'
                            />
                        </div>
                        <div>
                            <Icon path={mdiPlus}
                            size = {0.9}
                            color = 'snow'
                            />
                            <Icon path={mdiCircleSlice3}
                            size = {0.9}
                            color = 'snow'
                            />
                            <Icon path={mdiBellOutline}
                            size = {0.9}
                            color = 'snow'
                            />
                            <Icon path={mdiCogOutline}
                            size = {0.9}
                            color = 'snow'
                            />
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar