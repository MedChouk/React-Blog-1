/* eslint-disable jsx-a11y/img-redundant-alt */
import {Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '80vh',
        objectFit: 'cover',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible':{
            outline: 'none'
        }
     }
}))

const UpdateView = () => {
    const classes = useStyle();
    const url = 'https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="no image" />
            <FormControl className={classes.form} >
                <AddCircle fontSize="large" color="action"/>
                <InputBase placeholder="Title" className={classes.textField}/>
                <Button variant="contained" color="primary">
                Update    
                </Button>                
            </FormControl>
            <TextareaAutosize 
                    rowsMin={5}
                    placeholder="Tell your story ...."
                    className={classes.textarea}
                />
        </Box>
        )
}

export default UpdateView;