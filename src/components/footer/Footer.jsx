// import React from 'react';
// import { Container, Grid, TextField, Button } from '@mui/material';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
// import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
// import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
// import { observer } from "mobx-react"

// import './Footer.css'
// import BusinessDetail from '../../store/BusinessStore ';
// import logo from '../../assets/images/logo2.png'
// import lcon1 from '../../assets/images/icons/facebook-new.png'
// import lcon2 from '../../assets/images/icons/instagram-new.png'
// import lcon3 from '../../assets/images/icons/twitter.png'
// import lcon4 from '../../assets/images/icons/whatsapp.png'
// import lcon5 from '../../assets/images/icons/pinterest.png'
// const Footer = (observer(() => {

//   return (
//     <footer >
//     <div className="footer">
//       <Container>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6} md={3}>
//             <ul className="ul_in_the_footer">
//             <div className="title_row">About us:</div>
//               <li><a href="">Who we are</a></li>
//               <li><a href="">Terms of Service</a></li>
//               <li><a href="">Privacy Policy</a></li>

//             </ul>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <div>
//               <div className="title_row">Join the {BusinessDetail.data.name1} mailing list</div>
//               <div className="input-email">
//                 <TextField
//                   className="input_email"
//                   type="email"
//                   id="email"
//                   name="email"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                 />
//                 <Button
//                   className="input_submit"
//                   variant="contained"
//                   color="primary"
//                 >
//                   Submit
//                 </Button>
//               </div>
//               <div className="social_media">
//               <a href=""><img className="imgIcons" src={lcon1} alt="logo" /></a>
//               <a href=""><img className="imgIcons" src={lcon2} alt="logo" /></a>
//               <a href=""><img className="imgIcons" src={lcon3} alt="logo" /></a>
//               <a href=""><img className="imgIcons" src={lcon4} alt="logo" /></a>
//               <a href=""><img className="imgIcons" src={lcon5} alt="logo" /></a>
//               </div>
//             </div>
//           </Grid>
//            <Grid item xs={12} sm={6} md={3}>
//             <ul className="ul_in_the_footer">  
//             <div className="title_row">Contact us</div>
//               <li><a href="">FAQs</a></li>
//               <li><a href="">Careers</a></li>
//             </ul>
//           </Grid> 
//           <Grid item xs={12} sm={6} md={3}>
//             <div>
//             <div className="contact_info">
//               <div className="title_row">Customer Service</div>
//                 <div><EmailRoundedIcon/> {BusinessDetail.data.email}</div>
//                 <div><PhoneIphoneRoundedIcon/>{BusinessDetail.data.phone}</div>
//                 <div><LocationOnRoundedIcon/>{BusinessDetail.data.address}</div>
//               </div>
//             </div>
//           </Grid>
//         </Grid>

//       </Container>
//     <div className="container_bottom">
//     <img className="logo3" src={logo} alt="logo" />
//     Copyright © 2010-2024 RuthyKlein All rights reserved     
//      </div>
//      </div>
//      </footer>
//   );
// }));

// export default Footer;
import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { observer } from "mobx-react"
import SendIcon from '@mui/icons-material/Send';

import './Footer.css'
import BusinessDetail from '../../store/BusinessStore ';
import logo from '../../assets/images/logo2.png'
import lcon1 from '../../assets/images/icons/facebook-new.png'
import lcon2 from '../../assets/images/icons/instagram-new.png'
import lcon3 from '../../assets/images/icons/twitter.png'
import lcon4 from '../../assets/images/icons/whatsapp.png'
import lcon5 from '../../assets/images/icons/pinterest.png'

const Footer = observer(() => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <ul className="ul_in_the_footer">
              <div className="title_row">About us:</div>
              <li><a href="">Who we are</a></li>
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div className="title_row">Join the {BusinessDetail.data.name1} mailing list</div>
              <div className="input-email">
                {/* <TextField
                  className="input_email"
                  type="email"
                  id="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                /> */}
                
                 <TextField
          label="Email"
          type="email"
          defaultValue="@gmail.com"
          size="small"
          id="filled-size-small"
      
        />
                <Button variant="contained" size="small" endIcon={<SendIcon />}>
                  Send
                </Button>
              </div>
              <div className="social_media">
                <a href=""><img className="imgIcons" src={lcon1} alt="logo" /></a>
                <a href=""><img className="imgIcons" src={lcon2} alt="logo" /></a>
                <a href=""><img className="imgIcons" src={lcon3} alt="logo" /></a>
                <a href=""><img className="imgIcons" src={lcon4} alt="logo" /></a>
                <a href=""><img className="imgIcons" src={lcon5} alt="logo" /></a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul className="ul_in_the_footer">
              <div className="title_row">Contact us</div>
              <li><a href="">FAQs</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="contact_info">
              <div className="title_row">Customer Service</div>
              <div><EmailRoundedIcon /> {BusinessDetail.data.email}</div>
              <div><PhoneIphoneRoundedIcon />{BusinessDetail.data.phone}</div>
              <div><LocationOnRoundedIcon />{BusinessDetail.data.address}</div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="container_bottom">
        <img className="logo3" src={logo} alt="logo" />
        <div className="copy_right">Copyright © 2010-2024 RuthyKlein All rights reserved</div>
      </div>
    </footer>
  );
});

export default Footer;

