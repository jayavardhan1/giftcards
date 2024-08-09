import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const sampleData = [
    {
        id: 1,
        name: 'Australia',
        path: '',
        startDate: '12 Oct 2023 05:41 AM',
        endDate: '',
        active: true,
    },
    {
        id: 2,
        name: 'Test',
        path: '',
        startDate: '25 Apr 2024 08:33 AM',
        endDate: '',
        active: true,
    },
];


const Tiers = () => {
    const [tiersData, setTiersData] = useState(sampleData);
    const navigate = useNavigate();

    const handleEdit = (tierId) => {
        navigate(`/edit-tier/${tierId}`);
    };
    const columns = [
        {
            dataField: 'name',
            text: 'Name',
        },
        // {
        //     dataField: 'path',
        //     text: 'Path',
        // },
        {
            dataField: 'startDate',
            text: 'Start Date',
        },
        {
            dataField: 'endDate',
            text: 'End Date',
        },
        {
            dataField: 'active',
            text: 'Active',
            formatter: (cell) => (cell ? 'true' : 'false'),
        },
        {
            dataField: 'actions',
            text: 'Actions',
            formatter: (cell, row) => (
                <div className="d-flex justify-content-center">
                    <Button variant="link" onClick={() => handleEdit(row.id)}>
                        Edit
                    </Button>
                </div>
            ),
        },
    ];

    const handleAddNewTier = () => {
        navigate('/add-tier');
    };

    const paginationOptions = {
        sizePerPage: 5,
        showTotal: true,
        alwaysShowAllBtns: true,
        nextPageText: 'Next',
        prePageText: 'Prev',
    };

    return (
        <div className="main-content" style={{ background: '#fff', padding: '20px', borderRadius: '8px', minHeight: '90vh' }}>
            <Button variant="primary" className="mb-2" onClick={handleAddNewTier}>
                Add New Tier
            </Button>
            <div className="table-responsive">
                <BootstrapTable
                    hover
                    bootstrap4
                    keyField="id"
                    data={tiersData}
                    columns={columns}
                    pagination={paginationFactory(paginationOptions)}
                />
            </div>
        </div>
    );
};

export default Tiers;
