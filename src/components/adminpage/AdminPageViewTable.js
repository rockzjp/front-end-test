import React from 'react'
import AdminPageSpecialistTable from './AdminPageSpecialistTable'
import AdminPageLabourTable from './AdminPageLabourTable'
import AdminPageWorksiteTable from './AdminPageWorksiteTable'

const AdminPageViewTable = () => {
    return (
        <div>
            <AdminPageSpecialistTable />
            <AdminPageLabourTable />
            <AdminPageWorksiteTable />

        </div>
    )
}

export default AdminPageViewTable

