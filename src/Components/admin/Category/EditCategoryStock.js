import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { TextField, InputAdornment, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';

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
        name: 'Product A',
        sku: 'SKU001',
        productType: 'Electronics',
        fulfillmentType: 'Local',
        enabled: true,
        lastUpdated: '2024-07-20',
    },
    {
        id: 2,
        name: 'Product B',
        sku: 'SKU002',
        productType: 'Clothing',
        fulfillmentType: 'Global',
        enabled: true,
        lastUpdated: '2024-07-19',
    },
    // Add more sample data as needed
];

const EditCategoryStock = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const navigate = useNavigate();

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

    const handleEditItem = (itemId) => {
        navigate(`/admin/edit-category-stock/${itemId}`);
    };

    const columns = [
        {
            dataField: 'name',
            text: 'Name',
        },
        {
            dataField: 'sku',
            text: 'SKU',
        },
        {
            dataField: 'productType',
            text: 'Product Type',
        },
        {
            dataField: 'fulfillmentType',
            text: 'Fulfillment Type',
        },
        {
            dataField: 'enabled',
            text: 'Enabled',
            formatter: (cell) => (cell ? 'Yes' : 'No'),
        },
        {
            dataField: 'lastUpdated',
            text: 'Last Updated',
        },
        // {
        //     dataField: 'actions',
        //     text: 'Actions',
        //     formatter: (cell, row) => (
        //         <div className="d-flex justify-content-center">
        //             <EditIcon onClick={() => handleEditItem(row.id)} style={{ cursor: 'pointer' }} />
        //         </div>
        //     ),
        // },
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
        <ThemeProvider theme={theme}>
            <div className="main-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px', minHeight: '90vh' }}>
                <h1 className="mt-3">Edit Category Stock</h1>
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

export default EditCategoryStock;
