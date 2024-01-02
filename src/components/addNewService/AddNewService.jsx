import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import ServiceStore from '../../store/ServiceStore';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import pic from '../../assets/images/back.jpg'


const AddNewService = (observer(() => {

    const [count, setCount] = useState(4);
    const [formService, setFormService] = useState({
        id: count,
        name: '',
        description: '',
        price: '',
        duration: '',
        imgService: pic
    })
    const handleInputChange = (e) => {
        setFormService((prevService) => ({
            ...prevService,
            [e.target.name]: e.target.value,
        }));
    };
    const handleInCreaseId = (i) => {
        setFormService((prevService) => ({
            ...prevService,
            id: i,
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleInCreaseId(count);
        ServiceStore.addServices(formService);
        setFormService((prevService) => ({
            ...prevService,
            id: count,
            name: '',
            description: '',
            price: '',
            duration: '',
            imgService: pic
        }))
        handleClose();
        setCount((prevId) => prevId + 1);
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div>
                <Box sx={{
                    '& > :not(style)': { m: 1 },
                    position: 'absolute',
                    left: '15px',
                    bottom: '100px',
                    margin: "197px",
                    marginLeft: "initial",

                }}>
                    <Fab color="primary"

                        onClick={handleClickOpen}
                        variant="extended"
                        aria-label=" To Add a service">
                        <AddIcon sx={{ mr: 1 }} />
                        To Add a New service
                    </Fab>
                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="xs"
                    fullWidth
                    aria-labelledby="form-dialog-title"
                    PaperProps={{ sx: { p: 4 } }}
                >
                    <DialogTitle>To add a new service</DialogTitle>

                    <form onSubmit={handleSubmit} className="form">
                        {/* Service details */}
                        <TextField
                            id="serviceName_input"
                            label="Sevice Name"
                            variant="outlined"
                            className="inputs"
                            name="name"
                            value={formService.name}
                            onChange={handleInputChange}
                            sx={{ mb: 3 }}
                            fullWidth
                            required
                        />
                        <TextField
                            id="serviceDescription_input"
                            label="Service Description"
                            variant="outlined"
                            className="inputs"
                            name="description"
                            value={formService.description}
                            onChange={handleInputChange}
                            sx={{ mb: 3 }}
                            fullWidth
                            required
                        />
                        <TextField
                            id="servicePrice_input"
                            label="Service Price"
                            variant="outlined"
                            className="inputs"
                            name="price"
                            value={formService.price}
                            onChange={handleInputChange}
                            sx={{ mb: 3 }}
                            fullWidth
                            required
                        />
                        <TextField
                            id="serviceDration_input"
                            label="Service duration"
                            variant="outlined"
                            className="inputs"
                            name="duration"
                            value={formService.duration}
                            onChange={handleInputChange}
                            sx={{ mb: 3 }}
                            fullWidth
                            required
                        />
                        {/* Submit button */}
                        <DialogActions>
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </>
    )
}))

export default AddNewService
