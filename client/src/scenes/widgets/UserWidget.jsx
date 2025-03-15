import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import React from 'react';
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateYupSchema } from "formik";
import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkIcon from '@mui/icons-material/Link';
import "../style.css"



const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;


    const [twitterDetails, setTwitterDetails] = useState({ url: "", openInput: false });
    const [linkedInDetails, setLinkedInDetails] = useState({ url: "", openInput: false });

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }

        );
        const data = await response.json();
        setUser(data);

    };


    useEffect(() => {
        getUser();
    }, [])

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        Year,
        viewedProfile,
        impressions,
        friends,
    } = user;

    const goToTwitter = () => {
        window.open(twitterDetails.url, "_blank");
    };
    const goToLinkedIn = () => {
        window.open(linkedInDetails.url, "_blank");
    };

    const twitterIcon = () => {
        if (twitterDetails.url === "") {
            return <button className="url-button" onClick={() => setTwitterDetails({ ...twitterDetails, openInput: !twitterDetails.openInput })
            }><AddLinkIcon /></button>
        } else {
            return <button className="url-button" onClick={() => goToTwitter()} ><LinkIcon></LinkIcon></button>
        }
    }

    const linkedInIcon = () => {
        if (linkedInDetails.url === "") {
            return <button className="url-button" onClick={() => setLinkedInDetails({ ...linkedInDetails, openInput: !linkedInDetails.openInput })
            }><AddLinkIcon /></button>
        } else {
            return <button className="url-button" onClick={() => goToLinkedIn()} ><LinkIcon></LinkIcon></button>
        }
    }

    const validateTwitterUrl = (event) => {
        if (event.key === "Enter") {
            const inputUrl = event.target.value;
            if (inputUrl.startsWith("https://x.com/")) {
                setTwitterDetails({ url: inputUrl, openInput: false });

            } else {
                alert("Please enter a valid Twitter URL.");
            }
        }
    }

    const validateLinkedInUrl = (event) => {
        if (event.key === "Enter") {
            const inputUrl = event.target.value;
            if (inputUrl.startsWith("https://www.linkedin.com/in/")) {
                setLinkedInDetails({ url: inputUrl, openInput: false });

            } else {
                alert("Please enter a valid Twitter URL.");
            }
        }
    }


    const openTwitterUrlInputer = () => {
        if (twitterDetails.openInput) {
            return <input className="url-input" placeholder="Upload Twitter Url" onKeyDown={validateTwitterUrl}></input>
        }
    }

    const openLinkedInUrlInputer = () => {
        if (linkedInDetails.openInput) {
            return <input className="url-input" placeholder="Upload LinkedIn Url" onKeyDown={validateLinkedInUrl}></input>
        }
    }

    return (
        <WidgetWrapper>
            {/* First Row */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}

            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography
                            variant="h4"
                            color="dark"
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.primary.light,
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={medium} >{friends.length} Connections</Typography>
                    </Box>



                </FlexBetween>
                <ManageAccountsOutlined />
            </FlexBetween>

            <Divider />

            {/* SECOND Row */}

            <Box p="1rem 0"  >
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem" >
                    <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium} >{location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem"  >
                    <SchoolRoundedIcon fontSize="large" sx={{ color: main }} />
                    <Typography color={medium} >{Year}</Typography>
                </Box>
            </Box>
            <Divider />
            {/* Third Row */}
            <Box p="1rem 0">
                <FlexBetween mb="0.5rem">
                    <Typography color={medium}> Who's viewed your profile</Typography>
                    <Typography color={main} fontWeight={500}>
                        {viewedProfile}
                    </Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={medium}>Impression's of your post</Typography>
                    <Typography color={main} fontWeight={500}>
                        {impressions}
                    </Typography>
                </FlexBetween>
            </Box>
            <Divider />

            {/* Fourth Row */}
            <Box p="1rem 0" >
                <Typography fontSize="1rem" color={main} fontWeight={500} mb="1rem">
                    Social Profiles
                </Typography>
                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography color={main} fontWeight={500} >
                                Twitter
                            </Typography>
                            <Typography color={medium} >Social Network</Typography>
                        </Box>
                    </FlexBetween>


                    {twitterIcon()}


                </FlexBetween>
                {openTwitterUrlInputer()}
                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/linkedin.png" alt="twitter" />
                        <Box>
                            <Typography color={main} fontWeight={500} >
                                Linkedin
                            </Typography>
                            <Typography color={medium} >Network Platform</Typography>
                        </Box>
                    </FlexBetween>
                    {linkedInIcon()}
                </FlexBetween>
                {openLinkedInUrlInputer()}
            </Box>

        </WidgetWrapper>
    )

};


export default UserWidget;