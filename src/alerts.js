import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Base options for all toasts
const baseOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

// Specific alert functions
export const alertAddToCart = () => {
    toast.success('Added to cart successfully!', baseOptions);
};

export const alertOrderPlaced = () => {
    toast.success('Order placed successfully!', baseOptions);
};
export const updateSuccess = () => {
    toast.success('Updated successfully!', baseOptions);
};

export const alertInfo = (message) => {
    toast.info(message, baseOptions);
};

export const alertError = (message) => {
    toast.error(message, baseOptions);
};

export const alertWarning = (message) => {
    toast.warn(message, baseOptions);
};
