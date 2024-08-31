import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import React from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const medium = palette.neutral.medium;

    const isFriend = friends.find((friend) => friend._id === friendId);

    const patchFriend = async () => {
        const response = await fetch(
            "http://localhost:3001/users/${_id}/${friendId}",
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "content-type": "application/json",
                },
            }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    // Render null if user data is not yet available
    if (!_id) return null;

    return (
        <FlexBetween>
            <UserImage image={userPicturePath} size="55px" />
            <Box
                onClick={() => {
                    navigate(`/profile/${friendId}`);
                    navigate(0);
                }}
            >
                <Typography  color={medium} fontSize="0.75rem">
                    {subtitle}
                </Typography>
                <Typography
                    color={palette.neutral.main}
                    variant="h5"
                    fontWeight="500"
                    sx={{
                        "&:hover": {
                            color: palette.primary.light,
                            cursor: "pointer",
                        },
                    }}
                >
                    {name}
                </Typography>
            </Box>
            <IconButton
                onClick={patchFriend}
                sx={{
                    backgroundColor: primaryLight,
                    p: "0.6rem",
                }}
            >
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: primaryDark }} />
                ) : (
                    <PersonAddOutlined sx={{ color: primaryDark }} />
                )}
            </IconButton>
        </FlexBetween>
    );
};

export default Friend;
