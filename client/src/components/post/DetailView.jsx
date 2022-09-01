/* eslint-disable jsx-a11y/alt-text */
import {Box, makeStyles, Typography} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {Link} from 'react-router-dom';

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
    icons: {
        float: 'right'  
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
          display: 'block' 
        }

    }
}))

const DetailView = () => {
    const classes = useStyle();
    const url = 'https://images.pexels.com/photos/4590385/pexels-photo-4590385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image}/>
            <Box className={classes.icons}>
                <Link to='/update'>
                    <Edit className={classes.icon} color="primary"/>
                </Link>
                <Delete className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>
                Title of the blog 
            </Typography>
            <Box className={classes.subheading}>
                <Typography>
                    Author : <span style={{fontWeight: 600}}>Codeforinterview</span> 
                </Typography>
                <Typography style= {{marginLeft: 'auto'}}>
                    22 June 2021
                </Typography>
            </Box>
            <Typography>
                This is a bolg from code for interview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt et repellendus provident omnis ipsam error quo illo, magnam dicta quod cum similique sed exercitationem ut minima cumque? Harum, aliquid!
            </Typography>
        </Box>
    )
}

export default DetailView;