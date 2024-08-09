import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { TextField, InputAdornment, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: '"Open sans", "Regular"', fontSize: 14, margin: 0, padding: 0, lineSpacing: 36,
    }, palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

const sampleData = [
    {
        messageId: 'MSG001',
        client: 'ABB Australia',
        username: 'johndoe',
        email: 'john.doe@example.com',
        message: 'Welcome to ABB Australia!',
        date: '12-Oct-23',
        status: 'Active',
    },
    {
        messageId: 'MSG002',
        client: 'AP Demo',
        username: 'janesmith',
        email: 'jane.smith@example.com',
        message: 'Welcome to AP Demo!',
        date: '10-Mar-10',
        status: 'Inactive',
    },
    // Add more sample data as needed
];

const WelcomeMessages = () => {
    const [messageData, setMessageData] = useState(sampleData);
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleEdit = (messageId) => {
        navigate(`/admin/edit-message/${messageId}`);
    };

    const columns = [
        {
            dataField: 'messageId',
            text: 'Message ID',
        },
        {
            dataField: 'client',
            text: 'Client',
        },
        {
            dataField: 'username',
            text: 'Username',
        },
        {
            dataField: 'email',
            text: 'Email',
        },
        {
            dataField: 'message',
            text: 'Message',
        },
        {
            dataField: 'date',
            text: 'Date',
        },
        {
            dataField: 'status',
            text: 'Status',
        },
        {
            dataField: 'actions',
            text: 'Actions',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <EditNoteOutlinedIcon onClick={() => handleEdit(row.messageId)} style={{ cursor: 'pointer' }} />
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
            messageData.filter((message) =>
                Object.values(message).some(
                    (value) =>
                        value &&
                        value.toString().toLowerCase().includes(searchText.toLowerCase())
                )
            )
        );
    }, [searchText, messageData]);

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
        <div className="main-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px',minHeight:'90vh' }}>
            <h1 className="mt-3">Welcome Messages</h1>
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="table-responsive">
                <BootstrapTable
                    hover
                    bootstrap4
                    keyField="messageId"
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
    );
};

export default WelcomeMessages;
