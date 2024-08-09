import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Switch, Select, MenuItem, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const EditAdmin = () => {
    const [status, setStatus] = useState(true);
    const [adminData, setAdminData] = useState({
        firstName: 'lifestyle',
        lastName: 'rewards',
        username: 'administrator',
        email: 'info@edgepri.com',
        team: ''
    });

    const [permissions, setPermissions] = useState({
        adminUserManagement: true,
        systemAdministrator: true,
        fulfillmentAdministrator: true,
        accountsOfficer: true,
        customerServiceOfficer: true,
        customerServiceSupervisor: true
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePermissionChange = (e) => {
        const { name, checked } = e.target;
        setPermissions((prevPermissions) => ({
            ...prevPermissions,
            [name]: checked
        }));
    };

    const handleSaveChanges = () => {
        console.log('Admin Data:', adminData);
        console.log('Permissions:', permissions);
    };

    return (
        <Box
            sx={{
                background: '#f8f8f8',
                padding: '20px',
                borderRadius: '8px',
                minHeight: '90vh',
                marginTop:"10px"
            }}
        >
            <Typography variant="h4" gutterBottom>
                Administrative User Management
            </Typography>
            {/*<Box display="flex" alignItems="center" mb={3}>*/}
            {/*    <TextField*/}
            {/*        value={`${adminData.firstName} ${adminData.lastName}`}*/}
            {/*        disabled*/}
            {/*        sx={{ marginRight: '10px' }}*/}
            {/*    />*/}
            {/*    <Switch*/}
            {/*        checked={status}*/}
            {/*        onChange={() => setStatus(!status)}*/}
            {/*        color="success"*/}
            {/*    />*/}
            {/*    <Typography variant="body1">*/}
            {/*        {status ? 'Active' : 'Inactive'}*/}
            {/*    </Typography>*/}
            {/*</Box>*/}
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" gutterBottom>
                        First Name:
                    </Typography>
                    <TextField
                        name="firstName"
                        value={adminData.firstName}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" gutterBottom>
                        Last Name:
                    </Typography>
                    <TextField
                        name="lastName"
                        value={adminData.lastName}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" gutterBottom>
                        Username:
                    </Typography>
                    <TextField
                        name="username"
                        value={adminData.username}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" gutterBottom>
                        Contact Email:
                    </Typography>
                    <TextField
                        name="email"
                        value={adminData.email}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" gutterBottom>
                        Team:
                    </Typography>
                    <Select
                        name="team"
                        value={adminData.team}
                        onChange={handleInputChange}
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Team A">Team A</MenuItem>
                        <MenuItem value="Team B">Team B</MenuItem>
                    </Select>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
                    <Button variant="contained" onClick={() => { /* Navigate back logic */ }}>
                        Back to List
                    </Button>
                    <Button variant="contained" color="success" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Box>
                <Box display="flex" flexDirection="column" mb={2}>
                    {Object.keys(permissions).map((permission) => (
                        <Box display="flex" alignItems="center" key={permission} mb={2}>
                            <Typography variant="h6" sx={{ flex: 1 }}>
                                {permission.split(/(?=[A-Z])/).join(' ')}
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={permissions[permission]}
                                        onChange={handlePermissionChange}
                                        name={permission}
                                        color="success"
                                    />
                                }
                                label={permissions[permission] ? 'Yes' : 'No'}
                            />
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default EditAdmin;
