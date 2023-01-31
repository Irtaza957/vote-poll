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
                    <Button variant="outlined" sx={{mt: 1, ml: 1}}>Search</Button>
                    </form>
                </div>

            </footer>
            {/* <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <HowToVoteIcon fontSize='large' sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,                                                                
                                fontFamily: 'monospace',
                                flexGrow: 1,
                                fontWeight: 900,
                                fontSize: '28px',
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            VotePoll
                        </Typography>
                    </div>
                    <div>
                        <h3>Social Icons</h3>
                        <ul>
                            <div className={styles.footerIcons}>
                                <div>
                                    <li><FacebookIcon /></li>
                                </div>
                                <div>
                                    <li><InstagramIcon /></li>
                                </div>
                                <div>
                                    <li><PinterestIcon /></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Learn To Vote</li>
                            <li>FAQ&#8217;s</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.copyright}>© copyright {year()} | All rights reserved</p>
                </div>
            </footer> */}
        </div>
    )
}

export default Footer