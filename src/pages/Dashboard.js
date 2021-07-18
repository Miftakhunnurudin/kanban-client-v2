import Sidebar from '../components/Sidebar';
import Board from '../components/Board'

function Dashboard () {
    return (
        <div className='d-flex h-100'>
            <Sidebar/>
            <Board/>
        </div>
    )
}

export default Dashboard