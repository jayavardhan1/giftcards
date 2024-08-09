import {
    ShoppingCart as ShoppingCartIcon,
    Settings as SettingsIcon,
    Message as MessageIcon,
    Store as StoreIcon,
    Category as CategoryIcon,
    List as ListIcon,
    AdminPanelSettings as AdminPanelSettingsIcon,
    AccountBalance as AccountBalanceIcon,
    Storefront as StorefrontIcon,
    Diversity1 as Diversity1Icon,
    Pageview as PageviewIcon,
    Palette as PaletteIcon,
    Email as EmailIcon
} from "@mui/icons-material";

export const linksData = [
    {
        to: "/admin/clients",
        text: "Clients",
        icon: <Diversity1Icon />,
        subLinks: []
    },
    {
        to: "/admin/orders",
        text: "Orders",
        icon: <ShoppingCartIcon />,
        subLinks: [
            { to: "/admin/orders/pending-digital-orders", text: "Pending-Digital Orders", icon: <ShoppingCartIcon /> },
            { to: "/admin/orders/pickup-sheets", text: "PickUp Sheets", icon: <ShoppingCartIcon /> },
            { to: "/admin/orders", text: "Orders", icon: <ShoppingCartIcon /> },
        ]
    },
    {
        to: "/admin/system/system-messages",
        text: "System",
        icon: <SettingsIcon />,
        subLinks: [
            { to: "/admin/system/system-messages", text: "System Messages", icon: <MessageIcon /> },
            { to: "/admin/system/system-pages", text: "System Pages", icon: <PageviewIcon /> },
            { to: "/admin/system/system-settings", text: "System Settings", icon: <SettingsIcon /> },
            { to: "/admin/system/style-sheet-themes", text: "Style Sheet Themes", icon: <PaletteIcon /> },
            { to: "/admin/system/system-emails", text: "System Emails", icon: <EmailIcon /> },
        ]
    },
    {
        to: "/admin/welcome-messages",
        text: "Welcome",
        icon: <MessageIcon />,
        subLinks: []
    },
    {
        to: "/admin/stock",
        text: "Stock",
        icon: <StoreIcon />,
        subLinks: [
            { to: "/admin/stock/stock-list", text: "Stock List", icon: <StoreIcon /> },
            { to: "/admin/stock/new-stock-group", text: "New Stock Group", icon: <CategoryIcon /> },
            { to: "/admin/stock/token-campaigns", text: "Token Campaigns", icon: <ListIcon /> },
            { to: "/admin/stock/boss-stock", text: "BOSS Stock", icon: <StoreIcon /> },
            { to: "/admin/stock/shared-pricing-model", text: "Shared Pricing Model", icon: <CategoryIcon /> },
        ]
    },
    {
        to: "/admin/categories",
        text: "Categories",
        icon: <CategoryIcon />,
        subLinks: []
    },
    {
        to: "/admin/list",
        text: "List",
        icon: <ListIcon />,
        subLinks: []
    },
    {
        to: "/admin/admin-users",
        text: "Admins",
        icon: <AdminPanelSettingsIcon />,
        subLinks: []
    },
    {
        to: "/admin/accounting",
        text: "Accounting",
        icon: <AccountBalanceIcon />,
        subLinks: []
    },
    {
        to: "/admin/merchants",
        text: "Merchants",
        icon: <StorefrontIcon />,
        subLinks: []
    },
];
