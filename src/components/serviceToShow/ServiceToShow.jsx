import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, Typography } from '@mui/material';

import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import ServiceStore from '../../store/ServiceStore';
import GlobalStore from '../../store/GlobalStore';
import AddNewService from '../addNewService/AddNewService';

const ServiceToShow = observer(() => {
  useEffect(() => {
    ServiceStore.getServices();
  }, []);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly', padding: '1.5%', paddingBottom: '8%', paddingTop: '5%' }}>
        {ServiceStore.serviceData.map((item, index) => (
          <Card sx={{ width: 345, height: 500, position: 'relative' , backgroundColor:"#d858c726"}} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={item.imgService}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  {item.description}
                </Typography>
                <Typography variant="subtitle1" >
                  price: {item.price}
                  <br/>
                </Typography>
                <Typography variant="subtitle1" >
                  duration: {item.duration}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {!GlobalStore.isLogin && <AddNewMeeting service={item} />}

            </CardActions>
          </Card>
        ))}
        {GlobalStore.isLogin && <AddNewService />}

      </div>

    </>
  );
});

export default ServiceToShow;







