
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import Swal from 'sweetalert2';
import BusinessStore from '../../store/BusinessStore ';

const EditDetails = observer(() => {
    const [formDetails, setformDetails] = useState(BusinessStore.data);
    const [detailsData, setDetailsData] = useState({
        id: '1',
        name: " ❤ Slide - Digital Marketing",
        address:"117 Herzl St. Ramat Gan",
        email: "info@slideit.co.il",
        phone: "03-9010646",
        owner: "Ruth Klein",
        description: "We are here to achieve more from digital marketing for your business ",
        logo: '../../assets/images/logo2'
    });
    const ensure = () => {
        Swal.fire({
            title: "Are you sure want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Your details have been successfully saved!!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    useEffect(() => {
        setDetailsData({
            id: detailsData.id,
            name: detailsData.name,
            address: detailsData.address,
            email: detailsData.email,
            phone: detailsData.phone,
            owner: detailsData.owner,
            description: detailsData.description,
            logo: detailsData.logo,
        });
    }, [formDetails]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetailsData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        BusinessStore.updateDetails(detailsData);
        ensure();
        handleClose();

    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="edit" onClick={handleClickOpen} sx={{ position: 'absolute', top: 100, right: 50 }}>
                    <Tooltip title="Edit details">
                        <EditIcon />
                    </Tooltip>
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
                <DialogTitle>Business details</DialogTitle>
                <form onSubmit={handleSubmit} className="form">


                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        defaultValue={BusinessStore.data.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        className="inputs"
                        name="address"
                        defaultValue={BusinessStore.data.address}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        className="inputs"
                        name="email"
                        defaultValue={BusinessStore.data.email}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        className="inputs"
                        name="phone"
                        defaultValue={BusinessStore.data.phone}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />

                    <TextField
                        id="owner"
                        label="Owner"
                        variant="outlined"
                        className="inputs"
                        name="owner"
                        defaultValue={BusinessStore.data.owner}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        className="inputs"
                        name="description"
                        defaultValue={BusinessStore.data.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth

                    />

                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
});

export default EditDetails

