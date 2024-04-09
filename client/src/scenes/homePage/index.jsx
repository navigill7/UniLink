import { Box , useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useSelector  } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import Friend from "components/Friends";
import EventsWidget from "scenes/widgets/Events";
import ConnectionListWidget from "scenes/widgets/ConnectionListWidget";

 
const HomePage = ()=>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id , picturePath } = useSelector((state)=> state.user);

    return ( 
        <Box>
            <Navbar/>
            <Box
              width="100%"
              padding="2rem 6%"
              display={isNonMobileScreens ? "flex" : "block"}
              gap="0.5rem"
              justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined }>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box
                   flexBasis={isNonMobileScreens ? "42%" : undefined} 
                    mt={isNonMobileScreens ? undefined : "2rem"} >
                        <MyPostWidget picturePath={picturePath} />
                        <PostsWidget userId={_id} />
                        
                </Box>

                {isNonMobileScreens && 
                    <Box flexBasis="26%" >
                       <EventsWidget />
                       <Box m="2rem 0" />
                       <ConnectionListWidget userId={_id} />
                    </Box>
                }



            </Box>
        </Box>
    )
}

export default HomePage;