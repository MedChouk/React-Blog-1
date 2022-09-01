/* eslint-disable jsx-a11y/img-redundant-alt */
import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *':{
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text: {
        color:'#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes = useStyles();
    const url = 'https://images.pexels.com/photos/4506938/pexels-photo-4506938.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    return (
        <Box className={classes.container}>
            <img src={url} alt="no image" className={classes.image} />
        <Typography className={classes.text}>Music</Typography>
        <Typography className={classes.heading}>Code For Interview</Typography>
        <Typography className={classes.text}>Author : code</Typography>
        <Typography className={classes.detail}>From CodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCodeCode</Typography>
        </Box>
    ) 
}

export default Post; 