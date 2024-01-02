import React, { useEffect } from 'react';
import { observer } from "mobx-react"
import AdminLogin from '../adminLogin/AdminLogin'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Business from '../Business/Business';
import BusinessDetails from "../businessDetails/BusinessDetails"
import GlobalStore from "../../store/GlobalStore"

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Admin = (observer(() => {
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        if (localStorage.getItem("isLogin") === "true") {
            GlobalStore.setIsLogin(true)
        }
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
<div>
            <Header />
            {!GlobalStore.isLogin ? (
                <AdminLogin />) : (
                <>
                    <BusinessDetails />
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress}  />
                        {/* color="secondary" */}
                    </Box>
                    <Business />
                </>
            )}
            </div>
            <Footer />
        </>
    )
}))

export default Admin
