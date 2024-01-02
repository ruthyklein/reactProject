import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import ServiceToShow from '../serviceToShow/ServiceToShow';
import BusinessDetails from '../businessDetails/BusinessDetails';

const User = observer(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    localStorage.removeItem("isLogin");
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
      <BusinessDetails />
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <ServiceToShow />
      </div>
      <Footer />
    </>
  );
});

export default User;
