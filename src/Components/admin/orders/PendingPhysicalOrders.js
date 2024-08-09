import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { TextField, InputAdornment, Box, CircularProgress, Checkbox } from '@mui/material';
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
        orderId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        sku: 'SKU123',
        name: 'Product 1',
        quantity: 2,
        orderDate: '12-Oct-23',
    },
    {
        orderId: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        sku: 'SKU124',
        name: 'Product 2',
        quantity: 1,
        orderDate: '10-Mar-10',
    },
    {
        orderId: 3,
        firstName: 'jayavardhan',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        sku: 'SKU124',
        name: 'Product 2',
        quantity: 1,
        orderDate: '10-Mar-10',
    }
    // Add more sample data as needed
];

const PendingPhysicalOrders = () => {
    const [orderData, setOrderData] = useState(sampleData);
    const [filteredData, setFilteredData] = useState(sampleData);
    const [dataLoading, setDataLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const navigate = useNavigate();

    const handlePick = (orderId) => {
        navigate(`/admin/pick-order/${orderId}`);
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setFilteredData(filteredData.map(order => ({ ...order, selected: !selectAll })));
    };

    const handleSelect = (orderId) => {
        setFilteredData(filteredData.map(order => order.orderId === orderId ? { ...order, selected: !order.selected } : order));
    };

    const columns = [
        {
            dataField: 'orderId',
            text: 'Order Id',
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
            dataField: 'sku',
            text: 'SKU',
        },
        {
            dataField: 'name',
            text: 'Name',
        },
        {
            dataField: 'quantity',
            text: 'Quantity',
        },
        {
            dataField: 'orderDate',
            text: 'Order Date',
        },
        {
            dataField: 'pick',
            text: 'Pick',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <EditNoteOutlinedIcon onClick={() => handlePick(row.orderId)} style={{ cursor: 'pointer' }} />
                </div>
            ),
        },
        // {
        //     dataField: 'selected',
        //     text: 'Select All',
        //     headerFormatter: () => (
        //         <Checkbox
        //             checked={selectAll}
        //             onChange={handleSelectAll}
        //         />
        //     ),
        //     formatter: (cell, row) => (
        //         <Checkbox
        //             checked={row.selected || false}
        //             onChange={() => handleSelect(row.orderId)}
        //         />
        //     ),
        // },
    ];

    useEffect(() => {
        setDataLoading(true);
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setFilteredData(
            orderData.filter((order) =>
                Object.values(order).some(
                    (value) =>
                        value &&
                        value.toString().toLowerCase().includes(searchText.toLowerCase())
                )
            )
        );
    }, [searchText, orderData]);

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
            <h1 className="mt-3">Pending Physical Orders</h1>
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
                    keyField="orderId"
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

export default PendingPhysicalOrders;
