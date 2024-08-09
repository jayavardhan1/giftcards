import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { TextField, InputAdornment, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: '"Open sans", "Regular"', fontSize: 14, margin: 0, padding: 0, lineSpacing: 36,
    },
    palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

const sampleData = [
    {
        id: 1,
        username: 'jdoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@example.com',
        active: true,
        team: 'Development',
        roles: 'Admin',
    },
    {
        id: 2,
        username: 'asmith',
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'asmith@example.com',
        active: false,
        team: 'Marketing',
        roles: 'User',
    },
    {
        id: 3,
        username: 'bwilliams',
        firstName: 'Bob',
        lastName: 'Williams',
        email: 'bwilliams@example.com',
        active: true,
        team: 'Design',
        roles: 'Editor',
    },
    // Add more sample data as needed
];

const AdminUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const navigate = useNavigate();

    const handleEditUser = (userId) => {
        navigate(`/admin/edit-user/${userId}`);
    };

    const columns = [
        {
            dataField: 'username',
            text: 'Username',
        },
        {
            dataField: 'firstName',
            text: 'First Name',
        },
        {
            dataField: 'lastName',
            text: 'Last Name',
        },
        {
            dataField: 'email',
            text: 'Email',
        },
        {
            dataField: 'active',
            text: 'Active',
            formatter: (cell) => (cell ? 'Active' : 'Inactive'),
        },
        {
            dataField: 'team',
            text: 'Team',
        },
        {
            dataField: 'roles',
            text: 'Roles',
        },
        {
            dataField: 'actions',
            text: 'Actions',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    {/*<EditNoteOutlinedIcon onClick={() => handleEditUser(row.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />*/}
                    <EditIcon onClick={() => handleEditUser(row.id)} style={{ cursor: 'pointer' }} />
                </div>
            ),
        },
    ];

    useEffect(() => {
        setDataLoading(true);
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setFilteredData(
            sampleData.filter((user) =>
                Object.values(user).some(
                    (value) =>
                        value &&
                        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
        );
    }, [searchTerm]);

    const paginationOptions = {
        sizePerPage: 10,
        sizePerPageList: [
            { text: '10', value: 10 },
            { text: '20', value: 20 },
            { text: '50', value: 50 },
        ],
        showTotal: true,
        alwaysShowAllBtns: true,
        nextPageText: 'Next',
        prePageText: 'Prev',
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="main-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px', minHeight: '90vh' }}>
                <h1 className="mt-3">Admin Users</h1>
                <TextField
                    placeholder="Search"
                    size="small"
                    style={{
                        boxShadow: '0px 3px 6px #3E67B133',
                        marginBottom: '20px',
                        transform: 'translateX(26px)',
                        scale: '1.3',
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="table-responsive">
                    <BootstrapTable
                        hover
                        bootstrap4
                        keyField="id"
                        data={filteredData}
                        columns={columns}
                        pagination={paginationFactory(paginationOptions)}
                        noDataIndication={
                            dataLoading ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <span>No Data Found</span>
                                </Box>
                            )
                        }
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default AdminUsers;
