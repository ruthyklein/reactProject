import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import BusinessStore from '../../store/BusinessStore ';
import GlobalStore from '../../store/GlobalStore';
import EditDetails from '../editDetails/EditDetails';

const BusinessDetails = observer(() => {

  useEffect(() => {
    async function fetchData() {
      await BusinessStore.initialData();
      if (Object.keys(BusinessStore.data).length === 0) {
        BusinessStore.initData({
          id: '1',
          name: " ❤ Slide - Digital Marketing",
          address: "117 Herzl St. Ramat Gan",
          email: "info@slideit.co.il",
          phone: "03-9010646",
          owner: "Ruth Klein",
          description: "We are here to achieve more from digital marketing for your business ",
          logo: '../../assets/images/logo2'
        });
      }
    }
    fetchData();
  }, []);
  const [animate, setAnimate] = useState(false);
  const businessDetails = [
    { label: 'Business Name:', value: BusinessStore.data.name },
    { label: 'Description:', value: BusinessStore.data.description },
    { label: 'Address:', value: BusinessStore.data.address },
    { label: 'Email:', value: BusinessStore.data.email },
    { label: 'Phone:', value: BusinessStore.data.phone },

  ];
  return (

    <div
      style={{
        display: 'flex',
        backgroundColor: "#1976d221",
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        paddingTop: '20px',
        transition: 'margin-top 0.5s ease',
        textAlign: 'center',

      }}
      className={`${animate ? 'animate' : ''}`}
    >
        <Rating name="size-small" defaultValue={2} />

      {businessDetails.map((detail, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '1.5rem',
            color: 'black',
          }}
        >
          <Typography
            variant="body1"
            style={{
              color: 'gray',
              fontWeight: index < 2 ? 'bold' : 'normal',
            }}>
            {detail.value}
          </Typography>

        </div>
      ))}

      {GlobalStore.isLogin && (
        <EditDetails />
      )}
    </div>
  );
});

export default BusinessDetails;

