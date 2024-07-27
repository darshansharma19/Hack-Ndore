import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

import user1 from "public/images/backgrounds/u2.jpg";
import user2 from "public/images/backgrounds/u3.jpg";
import user3 from "public/images/backgrounds/u4.jpg";

const blogs = [
  {
    img: user1,
    title: "Water Supply Services in INDORE",
    subtitle: "An overview of water supply services in Indore, highlighting key metrics, operational insights, and service coverage.",
    btncolor: "error.main",
    link: "/ui-components/buttons" 
  },
  {
    img: user2,
    title: "Health Care Services in INDORE",
    subtitle: "A summary of health care services in Indore, focusing on key facilities, service availability, and health initiatives.",
    btncolor: "warning.main",
    link: "/ui-components/forms" 
  },
  {
    img: user3,
    title: "Transportation Services in Indore",
    subtitle: "An overview of transportation options in Indore, including public transit, taxi services, and other modes of travel.",
    btncolor: "primary.main",
    link: "/ui-components/ratings" 
  }
];

const BlogCard = () => {
  return (
    <Grid container spacing={3}>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image
              src={blog.img}
              alt="img"
              style={{ width: "100%", height: "250px" }}
            />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h4">{blog.title}</Typography>
              <Typography
                color="textSecondary"
                mt={1}
                fontSize="14px"
                fontWeight={400}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                  backgroundColor: blog.btncolor,
                  "&:hover": {
                    backgroundColor: blog.btncolor,
                  },
                }}
                href={blog.link} 
              >
                Visit Page
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
