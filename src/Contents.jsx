import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import EmployeeList from './EmployeeList.jsx'
import EmployeeReport from './EmployeeReport.jsx'
import EmployeeEdit from './EmployeeEdit.jsx'

export default function Contents() {
    const NotFound = () => <h1>404: File Path Not Found</h1>
    return (
        <Routes>
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/edit/:id" element={<EmployeeEdit />} />
            <Route path="/report" element={<EmployeeReport />} />
            <Route path="/" element={<Navigate replace to="/employees" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}