import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { TextField, InputAdornment, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        id: 1,
        name: 'Product A',
        sku: 'SKU123',
        productType: 'Type 1',
        fulfilmentType: 'Type A',
        denomination: 100,
        discount: 10,
        discountType: 'Percentage',
        countryOfService: 'USA',
        active: true,
    },
    // Add more sample data as needed
];

const StockManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (productId) => {
        navigate(`/admin/edit-stock/${productId}`);
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
            dataField: 'fulfilmentType',
            text: 'Fulfilment Type',
        },
        {
            dataField: 'denomination',
            text: 'Denomination',
        },
        {
            dataField: 'discount',
            text: 'Discount',
        },
        {
            dataField: 'discountType',
            text: 'Discount Type',
        },
        {
            dataField: 'countryOfService',
            text: 'Country of Service',
        },
        {
            dataField: 'active',
            text: 'Active',
            formatter: (cell) => (cell ? 'Active' : 'Inactive'),
        },
        {
            dataField: 'actions',
            text: 'Actions',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <EditNoteOutlinedIcon onClick={() => handleEdit(row.id)} style={{ cursor: 'pointer' }} />
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
            sampleData.filter((product) =>
                Object.values(product).some(
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
                <h1 className="mt-3">Stock Management</h1>
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

export default StockManagement;
