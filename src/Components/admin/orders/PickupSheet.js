import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { Checkbox, Box, CircularProgress, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Open sans", "Regular"',
        fontSize: 14,
        margin: 0,
        padding: 0,
        lineSpacing: 36,
    },
    palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

const sampleData = [
    { id: 1, date: '2024-07-01', createdBy: 'John Doe' },
    { id: 2, date: '2024-07-02', createdBy: 'Jane Smith' },
    // Add more sample data as needed
];

const PickupSheet = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
        },
        {
            dataField: 'date',
            text: 'Date',
        },
        {
            dataField: 'createdBy',
            text: 'Created By',
        },
        {
            dataField: 'actions',
            text: 'Actions',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <EditNoteOutlinedIcon style={{ cursor: 'pointer' }} />
                </div>
            ),
        },
    ];

    const handleSelectItem = (id) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(id)
                ? prevSelectedItems.filter((selectedId) => selectedId !== id)
                : [...prevSelectedItems, id]
        );
    };

    const handleSelectAll = () => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.length === filteredData.length
                ? []
                : filteredData.map((item) => item.id)
        );
    };

    useEffect(() => {
        setDataLoading(true);
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setFilteredData(
            sampleData.filter((item) =>
                Object.values(item).some(
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
                <h1 className="mt-3">Pickup Sheet</h1>
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

export default PickupSheet;
