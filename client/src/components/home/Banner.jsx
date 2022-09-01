import {makeStyles, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/326511/pexels-photo-326511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}) center/100% repeat-x #000`,
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 80,
            color: '#000',
            lineHeaght: 1
        },    
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF'
        },
    }
});

const Banner = () => {
   const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Code for Interview ...</Typography>
        </Box>
    )
}
export default Banner;