import { Button } from '@mui/material'
import React from 'react'
import VoteIcon from '@material-ui/icons/HowToVote';
import VideoIcon from '@material-ui/icons/OndemandVideo';
import styles from '../styles/Home.module.css'
const Home = () => {
    return (
        <div>
            {/* Header */}
            <div className={styles.container}>
                <div>
                    <h1 className={styles.heading}> Welcome to
                        <strong >VotePoll</strong>
                        <style jsx>{`       
                        strong {
                            color: #1565C0;
                            margin-left: 5px;
                            border-bottom: 2px solid #1565C0;                                                      
                        }
                        `}</style>
                    </h1>                    
                    <div className={styles.description}>
                        <p>An Online Voting System that will guarantee the transperancy and privacy rights of voters with blockchain technology.</p>
                    </div>
                    <div className={styles.button}>
                        <Button variant="outlined" startIcon={<VideoIcon />} sx={{ mr: 1 }}> Learn To Vote</Button>
                        <Button variant="contained" startIcon={<VoteIcon />}> Vote Now</Button>
                    </div>
                </div>
                <div className={styles.headerImg}>
                    <img src='/headerImage.png' alt='header-img' />
                </div>
            </div>                    
        </div>
    )
}

export default Home