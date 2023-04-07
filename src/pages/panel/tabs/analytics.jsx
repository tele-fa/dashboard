import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@mui/material";

import { BarChart } from "@mui/icons-material";

const AnalyticsTab = () => {
  return (
    <Box>
      <Grid spacing={2} container>
        <Grid md={6} sm={6} xs={12} item>
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <BarChart />
                </Avatar>
              }
              title="Coming soon"
              subheader="Wait a bit!"
              sx={{
                color: "primary",
              }}
            />
            <CardContent>
              <Typography>
                With this service you can get analetics from your service. How
                many people authenticated, how many uses, successful and
                unsuccessful tried.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsTab;