import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DashboardCard from "../shared/DashboardCard";

const activities = [
  {
    time: "09.50",
    color: "success.main",
    text: "150 Antibiotics in Stock (MY HOSPITAL) ",
  },
  {
    time: "01.46",
    color: "secondary.main",
    text: "50 Water Meter A available in Water Supply House",
  },
  {
    time: "02.35",
    color: "primary.main",
    text: "New Request for Data",
  },
  {
    time: "04.48",
    color: "warning.main",
    text: "New Sale recorded #ML-3467",
  },
  {
    time: "06.20",
    color: "error.main",
    text: "Payment was made of Rs 500000",
  },
];

const DailyActivity = () => {
  return (
    <DashboardCard title="Activities & Notifications">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DashboardCard>
  );
};

export default DailyActivity;
