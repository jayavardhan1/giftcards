import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { TextField, InputAdornment, Box, CircularProgress, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans", "Regular"', fontSize: 14,
    },
    palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

const sampleData = [
    { id: 1, name: 'Setting 1', settingGroup: 'Group A', client: 'ABB Australia', value: 'Value 1', action: 'Edit' },
    { id: 2, name: 'Setting 2', settingGroup: 'Group B', client: 'AP Demo', value: 'Value 2', action: 'Edit' },
    // Add more sample data as needed
];

const SystemSettings = () => {
    const [clientFilter, setClientFilter] = useState('');
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a delay to show loading indicator
        setDataLoading(true);
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setFilteredData(
            sampleData.filter((setting) =>
                (!clientFilter || setting.client === clientFilter) &&
                (!searchText || setting.name.toLowerCase().includes(searchText.toLowerCase()))
            )
        );
    }, [clientFilter, searchText]);

    const handleEdit = (settingId) => {
        navigate(`/admin/edit-setting/${settingId}`);
    };

    const columns = [
        { dataField: 'name', text: 'Name' },
        { dataField: 'settingGroup', text: 'Setting Group' },
        { dataField: 'client', text: 'Client' },
        { dataField: 'value', text: 'Value' },
        {
            dataField: 'action',
            text: 'Action',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <EditNoteOutlinedIcon onClick={() => handleEdit(row.id)} style={{ cursor: 'pointer' }} />
                </div>
            ),
        },
    ];

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
        <div className="main-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px', minHeight: '90vh' }}>
            <h1 className="mt-3">System Settings</h1>
            <div className="filters" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <TextField
                    placeholder="Search by name"
                    size="medium"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    style={{ width: '300px' }}
                />
                <Select
                    value={clientFilter}
                    onChange={(e) => setClientFilter(e.target.value)}
                    displayEmpty
                    style={{ width: '200px' }}
                >
                    <MenuItem value="">
                        <em>All Clients</em>
                    </MenuItem>
                    <MenuItem value="ABB Australia">ABB Australia</MenuItem>
                    <MenuItem value="AP Demo">AP Demo</MenuItem>
                    {/* Add more clients as needed */}
                </Select>
            </div>
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
    );
};

export default SystemSettings;
