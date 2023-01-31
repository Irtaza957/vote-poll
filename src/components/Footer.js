import React from 'react'
import { TextField,Button } from '@mui/material'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Typography from '@mui/material/Typography';
import styles from '../styles/Footer.module.css'
const Footer = () => {
    function year() {
        return new Date().getFullYear()
    }
    return (
        <div>
            <footer className={styles.footerDistributed}>
                <div className={styles.footerLeft}>
                <HowToVoteIcon style={{ color: 'white' }} fontSize='large' sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"                            
                            sx={{                                                                                               
                                fontFamily: 'monospace',                                
                                fontWeight: 900,
                                fontSize: '30px',
                                letterSpacing: '.2rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            VotePoll
                        </Typography>
                    <p className={styles.footerLinks}>
                        <a href="#">Home |&nbsp;</a>                 
                        <a href="#"> About |&nbsp;</a>                        
                        <a href="#">Learn To Vote |&nbsp;</a>                                             
                        <a href="#">Faq |&nbsp;</a>                        
                        <a href="#"> Contact</a>
                    </p>
                    <p className={styles.footerCompanyName}>© copyright {year()} | All rights reserved</p>
                    <div className={styles.footerIcons}>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><PinterestIcon /></a>                     
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <form action="#" method="post">
                    <TextField 
                    InputLabelProps={{
                        style: { color: '#fff'}, 
                     }}
                    sx={{ my: 1, color: 'white'}} id="filled-basic" label="Search" variant="filled" />                      
                    <Button variant="outlined" style={{borderColor: '#ffff'}} sx={{mt: 1, ml: 1}}>Search</Button>
                    </form>
                </div>
            </footer>           
        </div>
    )
}

export default Footer