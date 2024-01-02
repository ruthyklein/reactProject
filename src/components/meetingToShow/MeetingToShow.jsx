import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import MeetingStore from '../../store/MeetingStore';
import './MeetingToShow.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme, className }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '&.red': {
        backgroundColor: '#ff6a6786',
    },
    '&.orange': {
        backgroundColor: 'rgba(255, 187, 0, 0.322)',
    },
    '&.green': {
        backgroundColor: '#c7ff879f',
    },
    ...className,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const MeetingToShow = observer(() => {
    useEffect(() => {
        MeetingStore.getMeeting();
        console.log("get MeetingToShow");
    }, []);

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function getColorClass(dateString) {
        const today = new Date();
        const date = new Date(dateString);
        const isToday = date.toDateString() === today.toDateString();
        const isThisWeek = date >= today && date <= new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);

        if (isToday) {
            return 'red';
        } else if (isThisWeek) {
            return 'orange';
        } else {
            return 'green';
        }
    }

    return (
        <>
            {MeetingStore.meetingData.map((item, index) => (
                <div key={index}>
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                            className={`${getColorClass(item.dateTime)}`}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                <div>{index + 1}</div>
                            </Typography>
                            <Typography>
                                <div>{item.dateTime}</div>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={getColorClass(item.dateTime)}>
                            <Typography>
                                <div><MiscellaneousServicesIcon /> <b>ServiceType :</b> {item.serviceType}</div>
                                <div><AccountCircleIcon /> <b>Client Name :</b> {item.clientName}</div>
                                <div><PhoneIphoneIcon /> <b>Client Phone :</b> {item.clientPhone}</div>
                                <div><AlternateEmailIcon /> <b>Client Email :</b> {item.clientEmail}</div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </>
    );
});

export default MeetingToShow;
