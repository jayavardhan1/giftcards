import account from './account.css';
import {Routes, Route, Link} from 'react-router-dom';
import MyOrders from "../../MyOrders/MyOrders";
import MyRewards from "../../MyRewards/MyRewards";
import PersonalDetails from "../../PersonalDetails/PersonalDetails";
import ChangePassword from "../../Auth/ChangePassword";
import EmailPreferences from "../../Auth/EmailPreferences";
export default function Account() {
    return (
        <div className="account-main">
            <div className="nav-container">
                <Link to="myorders"  className="nav-link">

                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector - 0" fill-rule="evenodd" clip-rule="evenodd"
                              d="M3.25 8C3.25 8.82843 2.57843 9.5 1.75 9.5C0.921573 9.5 0.25 8.82843 0.25 8C0.25 7.17157 0.921573 6.5 1.75 6.5C2.57843 6.5 3.25 7.17157 3.25 8V8ZM1.75 0.5C0.921573 0.5 0.25 1.17157 0.25 2C0.25 2.82843 0.921573 3.5 1.75 3.5C2.57843 3.5 3.25 2.82843 3.25 2C3.25 1.17157 2.57843 0.5 1.75 0.5V0.5ZM1.75 12.5C0.921573 12.5 0.25 13.1716 0.25 14C0.25 14.8284 0.921573 15.5 1.75 15.5C2.57843 15.5 3.25 14.8284 3.25 14C3.25 13.1716 2.57843 12.5 1.75 12.5V12.5ZM18.25 6.5H6.25C5.83579 6.5 5.5 6.83579 5.5 7.25V8.75C5.5 9.16421 5.83579 9.5 6.25 9.5H18.25C18.6642 9.5 19 9.16421 19 8.75V7.25C19 6.83579 18.6642 6.5 18.25 6.5V6.5ZM18.25 0.5H6.25C5.83579 0.5 5.5 0.835786 5.5 1.25V2.75C5.5 3.16421 5.83579 3.5 6.25 3.5H18.25C18.6642 3.5 19 3.16421 19 2.75V1.25C19 0.835786 18.6642 0.5 18.25 0.5V0.5ZM18.25 12.5H6.25C5.83579 12.5 5.5 12.8358 5.5 13.25V14.75C5.5 15.1642 5.83579 15.5 6.25 15.5H18.25C18.6642 15.5 19 15.1642 19 14.75V13.25C19 12.8358 18.6642 12.5 18.25 12.5V12.5Z"
                              fill="#1C170D"/>
                    </svg>
                    <div className="nav-link-text">My Orders</div>

                </Link>
                <Link to="myrewards" className="nav-link">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector - 0" fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.25 3.75H1.75C0.921573 3.75 0.25 4.42157 0.25 5.25V15.75C0.25 16.5784 0.921573 17.25 1.75 17.25H15.25C16.0784 17.25 16.75 16.5784 16.75 15.75V5.25C16.75 4.42157 16.0784 3.75 15.25 3.75V3.75ZM15.25 15.75H1.75V5.25H15.25V15.75V15.75ZM19.75 2.25V13.5C19.75 13.9142 19.4142 14.25 19 14.25C18.5858 14.25 18.25 13.9142 18.25 13.5V2.25H4C3.58579 2.25 3.25 1.91421 3.25 1.5C3.25 1.08579 3.58579 0.75 4 0.75H18.25C19.0784 0.75 19.75 1.42157 19.75 2.25V2.25Z"
                              fill="#1C170D"/>
                    </svg>

                    <div className="nav-link-text">My Rewards</div>
                </Link>
                <Link to="PersonalDetails" className="nav-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector - 0" fill-rule="evenodd" clip-rule="evenodd"
                              d="M19.6488 17.875C18.2209 15.4066 16.0206 13.6366 13.4528 12.7975C16.0635 11.2433 17.3142 8.13638 16.5082 5.2069C15.7022 2.27741 13.0383 0.247449 10 0.247449C6.96167 0.247449 4.29779 2.27741 3.49182 5.2069C2.68585 8.13638 3.93645 11.2433 6.54719 12.7975C3.97938 13.6356 1.77906 15.4056 0.35125 17.875C0.208703 18.1074 0.203527 18.3989 0.337731 18.6363C0.471935 18.8736 0.724375 19.0194 0.997024 19.0171C1.26967 19.0147 1.51957 18.8646 1.64969 18.625C3.41594 15.5725 6.53781 13.75 10 13.75C13.4622 13.75 16.5841 15.5725 18.3503 18.625C18.4804 18.8646 18.7303 19.0147 19.003 19.0171C19.2756 19.0194 19.5281 18.8736 19.6623 18.6363C19.7965 18.3989 19.7913 18.1074 19.6488 17.875V17.875ZM4.75 7C4.75 4.10051 7.10051 1.75 10 1.75C12.8995 1.75 15.25 4.10051 15.25 7C15.25 9.89949 12.8995 12.25 10 12.25C7.10179 12.2469 4.7531 9.89821 4.75 7V7Z"
                              fill="#1C170D"/>
                    </svg>
                    <div className="nav-link-text">Personal Details</div>
                </Link>
                <Link to="ChangePassword" className="nav-link">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector - 0" fill-rule="evenodd" clip-rule="evenodd"
                              d="M16.5 7.5H13.5V5.25C13.5 2.76472 11.4853 0.75 9 0.75C6.51472 0.75 4.5 2.76472 4.5 5.25V7.5H1.5C0.671573 7.5 0 8.17157 0 9V19.5C0 20.3284 0.671573 21 1.5 21H16.5C17.3284 21 18 20.3284 18 19.5V9C18 8.17157 17.3284 7.5 16.5 7.5V7.5ZM6 5.25C6 3.59315 7.34315 2.25 9 2.25C10.6569 2.25 12 3.59315 12 5.25V7.5H6V5.25ZM16.5 19.5H1.5V9H16.5V19.5V19.5ZM10.125 14.25C10.125 14.8713 9.62132 15.375 9 15.375C8.37868 15.375 7.875 14.8713 7.875 14.25C7.875 13.6287 8.37868 13.125 9 13.125C9.62132 13.125 10.125 13.6287 10.125 14.25V14.25Z"
                              fill="#1C170D"/>
                    </svg>
                    <div className="nav-link-text">Change Password</div>
                </Link>
                <Link to="EmailPreferences" className="nav-link">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector - 0" fill-rule="evenodd" clip-rule="evenodd"
                              d="M19 0.5H1C0.585786 0.5 0.25 0.835786 0.25 1.25V14C0.25 14.8284 0.921573 15.5 1.75 15.5H18.25C19.0784 15.5 19.75 14.8284 19.75 14V1.25C19.75 0.835786 19.4142 0.5 19 0.5V0.5ZM10 8.48281L2.92844 2H17.0716L10 8.48281ZM7.25406 8L1.75 13.0447V2.95531L7.25406 8ZM8.36406 9.01719L9.48906 10.0531C9.77592 10.3165 10.2166 10.3165 10.5034 10.0531L11.6284 9.01719L17.0659 14H2.92844L8.36406 9.01719ZM12.7459 8L18.25 2.95437V13.0456L12.7459 8Z"
                              fill="#1C170D"/>
                    </svg>
                    <div className="nav-link-text">Email Preferences</div>
                </Link>
                <div className="logout-link">
                    <div className="logout-btn">Logout</div>
                </div>
            </div>
            <div className="account-content">
                <Routes>
                    <Route path="myorders" element={<MyOrders/>}/>
                    <Route path="myrewards" element={<MyRewards/>}/>
                    <Route path="PersonalDetails" element={<PersonalDetails/>}/>
                    <Route path="ChangePassword" element={<ChangePassword/>}/>
                    <Route path="EmailPreferences" element={<EmailPreferences/>}/>
                    <Route path="*" element="404: Not Found">"404: Not Found"</Route>
                </Routes>
            </div>
        </div>
    );
}
