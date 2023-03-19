import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopIcon from '@mui/icons-material/Laptop';
import Typography from '@mui/material/Typography';

import './Experience.css';

const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <p>Experience</p>
            <div className='experience_detail'>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            Jun 2022 - Present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot  color="primary">
                                <LaptopIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="p" className='experience_role'>
                                Software Engineer
                            </Typography>
                            <Typography variant="h6">
                                Crest Data Systems
                            </Typography>
                            <Typography className='experience_desc'>
                                <div>
                                Responsible for designing technical architecture, development roadmap, implementation of the features, customer communication.
                                </div>
                                <div>
                                Worked on one of the Google Chronicle Project as a Full stack developer.
                                We are developing UI version of the Customer onboarding operations which will support various
                                Chronicle customer onboarding operations performed by Chronicle customer engineers, support team and partners.
                                </div>
                                <div>
                                Worked on command line tool to interact with the chronicle's APIs like Feeds, Parsers and Forwarders. Chronicle CLI allows customers to manage various operations that can be performed on chronicle.
                                </div>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>


                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Jan 2022 - Jun 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <LaptopIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="p" className='experience_role'>
                                Software Engineer Intern
                            </Typography>
                            <Typography variant="h6">
                                Crest Data Systems
                            </Typography>
                            <Typography className='experience_desc'>
                                <div>
                                Worked as a fronted-end engineer to Develop automation Tool which
                                is integration of the Jira application with a custom analytics platform
                                where all the employees daily, weekly, monthly, and yearly activities will be analyzed.
                                </div>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default Experience