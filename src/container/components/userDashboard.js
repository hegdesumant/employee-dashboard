import React from 'react'
import { useDispatch } from 'react-redux'
import { userDetails } from '../static/staticData'
import { setLoginInfoRedux } from '../redux/actions/actions'
import Table from './table'

const EmployeeDashoard = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            name: "Id",
            selector: "id"
        },
        {
            name: "Name",
            selector: "name"
        },
        {
            name: "Age",
            selector: "age"
        },
        {
            name: "Gender",
            selector: "gender"
        },
        {
            name: "Email",
            selector: "email"
        },
        {
            name: "Mobile",
            selector: "phoneNo"
        }
    ]
    const Logout = () => {
        window.localStorage.removeItem('isUserActive')
        dispatch(setLoginInfoRedux(false))
    }
    return (
        <div className="flex">
            <div className="p-1">
                <button onClick={Logout} className="button-grey">Logout</button>
            </div>
            <div className="p1">
                <Table columns={columns} data={userDetails} />
            </div>
        </div>
    );
}

export default EmployeeDashoard;