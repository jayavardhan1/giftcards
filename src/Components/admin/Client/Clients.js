import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import './Clients.css';
import { TextField, InputAdornment, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getClientList } from "../../../service/Api";

const theme = createTheme({
    typography: {
        fontFamily: '"Open sans", "Regular"', fontSize: 14, margin: 0, padding: 0, lineSpacing: 36,
    }, palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

const Clients = () => {
    const [clientName, setClientName] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const navigate = useNavigate();

    const handleEdit = (clientId) => {
        navigate(`/admin/edit-client/${clientId}`);
    };

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
        },
        {
            dataField: 'name',
            text: 'Name',
        },
        {
            dataField: 'programName',
            text: 'Program Name',
        },
        {
            dataField: 'active',
            text: 'Active',
            formatter: (cell) => (cell ? 'Active' : 'Inactive'),
        },
        {
            dataField: 'portalWebsite',
            text: 'Portal Website',
        },
        {
            dataField: 'clientWebsite',
            text: 'Client Website',
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
        const fetchData = async () => {
            setDataLoading(true);
            try {
                const data = await getClientList();
                setFilteredData(data);
            } catch (error) {
                console.error("Error fetching client list:", error);
            } finally {
                setDataLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const lowerCaseClientName = clientName.toLowerCase();
        setFilteredData((prevData) =>
            prevData.filter((client) =>
                Object.values(client).some(
                    (value) =>
                        value &&
                        value.toString().toLowerCase().includes(lowerCaseClientName)
                )
            )
        );
    }, [clientName]);

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
                <h1 className="mt-3">Clients</h1>
                <TextField
                    placeholder="Client name"
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
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
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

export default Clients;
