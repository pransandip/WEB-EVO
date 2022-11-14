import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import localLangData from '../../LanguageAsset/evo_lang.json';
import 'react-toastify/dist/ReactToastify.css';

const CallNotification = (props) => {
    const notify = () => toast.info(localLangData[localStorage.getItem('lang')].call_operator_text, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <div>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            {notify()}
        </div>
    );
}

export default CallNotification;