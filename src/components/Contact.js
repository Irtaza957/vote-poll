import { TextField,Button } from '@mui/material'
import React from 'react'
import styles from '../styles/Contact.module.css'
const Contact = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1>Get In Touch</h1>
                <hr className={styles.solid}></hr>
                <form className={styles.form}>     
                <div>
                <TextField sx={{width: 450}} id="filled-basic" label="Name" variant="filled" />
                </div>
                <div>
                <TextField sx={{width: 450, my: 1}} id="filled-basic" label="Email" variant="filled" />
                </div>
                <div>
                <TextField sx={{width: 450}} id="filled-basic" label="Message" variant="filled" />
                </div>
                <div className={styles.button}>
                <Button variant="outlined" style={{borderColor: '#f15540', color: '#f15540'}} sx={{mt: 1}}>Submit</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact