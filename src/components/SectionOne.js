import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
import OrganizeOne from '../assets/organizationPeace.svg'
import ScreenGIF from '../assets/2023_12_20_Final1.gif'

const withStyles = makeStyles(() => ({
    sectionOneWrapper: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        background: "#ffffff",
        minHeight: "500px",
        marginTop: "40px",
        padding: "0px 14% 0 14%",
        maxWidth: "93%",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            paddingTop: "100px",
            width: "auto"
        }
    },
    sectionOneHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        marginBottom: "20px",
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionOneSubheader: {
        fontSize: "1rem",
        textAlign: "left"
    },
    sectionOneJoinButton: {
        background: "black",
        color: "white",
        borderRadius: "20px",
        width: "200px",
        height: "50px",
        margin: "20px 0 20px 0",
        fontSize: "1.125rem",
        "& > span": {
            textTransform: "none",
        },
        "&:hover": {
            backgroundColor: "#6db0a7",
        },
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    bannerImage: {
        width: "53%",
        borderRadius: "16px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    bannerContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "32vw",
    },
    bannerImageWrapper: {
        display: "flex",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            margin: "50px 0"
        }
    }

}));



const SectionOne = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionOneWrapper}>
            <div className={classes.bannerContentWrapper}>
                <Typography className={classes.sectionOneHeader}>Simplify your knowledge</Typography>
                <Typography className={classes.sectionOneSubheader}>Capture and build on your insights like never before.</Typography>
                <Button target="_blank" href="https://app.educe.club/" className={classes.sectionOneJoinButton}>Join the club</Button>
            </div>
            <div className={classes.bannerImageWrapper}>
                <img className={classes.bannerImage} src={ScreenGIF} />
            </div>
        </div>
    )
}

export default SectionOne