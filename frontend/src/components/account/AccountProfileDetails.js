import { useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import React from "react";
import { s3Upload } from "../../libs/awsLib";
import Fab from "@material-ui/core/Fab";
const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    bookName: "To Kill a Mockingbird",
    bookAuthor: "Harper Lee",
    description: "The Description about the book",
    phone: "",
  });
  const file = useRef(null);

  const handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

   
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    console.log("eee", event)
    file.current = event.target.files[0];
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="New Book Details"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="The Name of the book"
                label="Book Name"
                name="bookName"
                onChange={handleChange}
                required
                value={values.bookName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Book Author"
                name="bookAuthor"
                onChange={handleChange}
                required
                value={values.bookAuthor}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
           

            <input
  accept="image/*"
  
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="contained" component="span" 
  startIcon={<CloudUploadIcon />}
  
  >
    Upload
  </Button>
</label> 
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
