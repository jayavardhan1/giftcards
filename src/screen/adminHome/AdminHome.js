import React from 'react';
import { Routes, Route } from "react-router-dom";
import Clients from "../../Components/admin/Client/Clients";
import EditClient from "../../Components/admin/Client/EditClient";
import PendingPhysicalOrders from "../../Components/admin/orders/PendingPhysicalOrders";
import Orders from "../../Components/admin/orders/Orders";
import StockManagement from "../../Components/admin/stock/StockManagement";
import Categories from "../../Components/admin/Category/Categories";
import EditCategory from "../../Components/admin/Category/EditCategory";
import EditCategoryStock from "../../Components/admin/Category/EditCategoryStock";
import AdminUsers from "../../Components/admin/AdminUsers";
import AdminSideNav from "../../Components/admin/navbars/AdminSideNav";
import AdminNavbar from "../../Components/admin/navbars/AdminNavbar";
import PickupSheet from "../../Components/admin/orders/PickupSheet";
import WelcomeMessages from "../../Components/admin/system/WelcomeMessages";
import SystemMessages from "../../Components/admin/system/SystemMessages";
import SystemSettings from "../../Components/admin/system/SystemSettings";
import Error from "../../Components/admin/Error";
import Accountants from "../../Components/admin/Accountants/Accountants";
import EditAdmin from "../../Components/admin/EditAdmin";


const AdminHome = () => {
    document.body.style.zoom = "90%";
    return (
        < >
            <div>

                    <AdminSideNav />
                    <AdminNavbar/>
                <div className="container">
                    <Routes>
                        <Route path="clients" element={<Clients />} />
                        <Route path="edit-client/:clientId" element={<EditClient />} />
                        <Route path="orders/pending-digital-orders" element={<PendingPhysicalOrders />} />
                        <Route path="orders/pickup-sheets" element={<PickupSheet />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="system/system-messages" element={<SystemMessages />} />
                        <Route path="system/system-settings" element={<SystemSettings />} />
                        <Route path="welcome-messages" element={<WelcomeMessages />} />
                        <Route path="stock/stockManagement" element={<StockManagement />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="edit-category/:categoryId" element={<EditCategory />} />
                        <Route path="edit-category-stock/:categoryId" element={<EditCategoryStock />} />
                        <Route path="admin-users" element={<AdminUsers />} />
                        <Route path="edit-user/:userId" element={<EditAdmin />} />
                        <Route path="accounting" element={<Accountants />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>

            </div>
        </>
    );
};

export default AdminHome;
