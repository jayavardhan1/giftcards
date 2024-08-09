import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Nav } from 'react-bootstrap';
import {
    List as ListIcon,
    ExitToApp as EntryExitIcon,
    Share as SocialMediaIcon,
    SwapHoriz as OverridesIcon,
    FilterList as MerchantFiltersIcon,
    Star as TiersIcon,
    AssignmentTurnedIn as QuestionnairesIcon,
    BarChart as ReportingExportIcon,
    CreditCard as FreeCreditsIcon,
    Redeem as FreeRewardsIcon,
    VpnKey as SelfRegistrationCodesIcon
} from '@mui/icons-material';
import {useParams} from "react-router-dom";
import Details from "./Details";
import EntryExit from "./EntryExit";
import SocialMedia from "./SocialMedia";
import Overrides from "./Overrides";
import Tiers from "./Tiers";


const EditClient = () => {
    const [activeSection, setActiveSection] = useState('Details');
    const { clientId } = useParams();

    const sections = [
        { name: 'Details', icon: <ListIcon /> },
        { name: 'Entry and Exit', icon: <EntryExitIcon /> },
        { name: 'Social Media', icon: <SocialMediaIcon /> },
        { name: 'Overrides', icon: <OverridesIcon /> },
        { name: 'Merchant Filters', icon: <MerchantFiltersIcon /> },
        { name: 'Tiers', icon: <TiersIcon /> },
        { name: 'Questionnaires', icon: <QuestionnairesIcon /> },
        { name: 'Reporting Export', icon: <ReportingExportIcon /> },
        { name: 'Free Credits', icon: <FreeCreditsIcon /> },
        { name: 'Free Rewards', icon: <FreeRewardsIcon /> },
        { name: 'Self-Registration Codes', icon: <SelfRegistrationCodesIcon /> }
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'Details':
                return <Details/>;
            case 'Entry and Exit':
                return <EntryExit/>;
            case 'Social Media':
                return <SocialMedia />;
            case 'Overrides':
                return <Overrides />;
             case 'Tiers':
                 return <Tiers />;
            // case 'Questionnaires':
            //     return <Questionnaires />;
            // case 'Reporting Export':
            //     return <ReportingExport />;
            // case 'Free Credits':
            //     return <FreeCredits />;
            // case 'Free Rewards':
            //     return <FreeRewards />;
            // case 'Self-Registration Codes':
            //     return <SelfRegistrationCodes />;
            default:
                return <div>Select a section from the sidebar.</div>;
        }
    };

    return (
            <Row>
                <Col md={2}>
                    <Nav className="flex-column pt-2" style={{  }}>
                        {sections.map((section) => (
                            <Nav.Link
                                key={section.name}
                                onClick={() => setActiveSection(section.name)}
                                className={`d-flex align-items-center mb-3 ${activeSection === section.name ? 'active' : ''}`}
                                style={{
                                    color: activeSection === section.name ? '#3E67B1' : 'inherit',
                                    backgroundColor: activeSection === section.name ? '#dfe6f2' : 'inherit',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                <span style={{ marginRight: '10px' }}>{section.icon}</span>
                                {section.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>
                <Col md={10}>
                    <h2>{activeSection} - Client ID: {clientId}</h2>
                    {renderSection()}
                </Col>
            </Row>
    );
};

export default EditClient;
