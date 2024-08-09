import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Accountants = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const handleSendReport = () => {
        console.log('From Date:', fromDate);
        console.log('To Date:', toDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt={3}
            >
                <Typography variant="h4" gutterBottom>
                    Accounting Report
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="flex-start" marginBottom="20px">
                    <Typography variant="h6" gutterBottom>
                        From-Date:
                    </Typography>
                    <DatePicker
                        value={fromDate}
                        onChange={(newValue) => setFromDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-start" marginBottom="20px">
                    <Typography variant="h6" gutterBottom>
                        To-Date:
                    </Typography>
                    <DatePicker
                        value={toDate}
                        onChange={(newValue) => setToDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Button variant="contained" color="success" onClick={handleSendReport}>
                    Send Report
                </Button>
            </Box>
        </LocalizationProvider>
    );
};

export default Accountants;
