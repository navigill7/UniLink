import { Typography , useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const EventsWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight={500}>
                    Upcoming Events
                </Typography>
            </FlexBetween>
            <img 
               width="100%"
               height="auto"
               alt="event"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjoIq7ueZ7K5wZu7Pi6jFOqnduymcSLH6448z4lGNCMEwD8orRKUOmeV_IkScWBNm_9U&usqp=CAU"
               style={{ borderRadius: "0.75rem" , margin: "0.75rem"}}

            />
            <FlexBetween >
                <Typography color={main}>
                    About Event
                </Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0" >
                Hackaccino is a greatest hackhathon ever happen
                on 6th and 7th april in Bennett University 
            </Typography>
        </WidgetWrapper>
    )

}

export default EventsWidget;