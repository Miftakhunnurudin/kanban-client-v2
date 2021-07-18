import { mdiBookSearchOutline, mdiChartLine, mdiFolderOpenOutline, mdiChatOutline, mdiCalendarMonthOutline} from '@mdi/js';
import Icon from '@mdi/react';

function Sidebar () {
    const sizeIcon = 0.9
    const colorIcon = '#6F6F6F'
    return (
        <>
            <div className="sidebar pt-4">
                <ul>
                    <li>
                        <Icon path={mdiBookSearchOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                        Overview
                    </li>
                    <li>
                        <Icon path={mdiChartLine}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                        Stats
                    </li>
                    <li>
                        <Icon path={mdiFolderOpenOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                        Project
                    </li>
                    <li>
                        <Icon path={mdiChatOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                        Chat
                    </li>
                    <li>
                        <Icon path={mdiCalendarMonthOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                        Calendar
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar