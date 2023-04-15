import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Data from "./vgh";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {Data.map(({ id, image, align, variant, color, backgrond, year, system, describe, icon  }) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={align}
              variant={variant}
              color={color}
            >
              {year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={backgrond}>
                {icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                {system}
              </Typography>
              <Typography>{describe}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
