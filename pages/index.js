import React, { useState } from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccessTime from '@material-ui/icons/AccessTime';
import DoneRounded from '@material-ui/icons/DoneRounded';
import CommentSharp from '@material-ui/icons/CommentSharp';

import DashboardCard from '../src/UI/dashboardCard';
import Card from '../src/UI/Card';

import { Line, HorizontalBar, Polar } from 'react-chartjs-2';

const chartData = [
  { x: new Date(2016, 0), y: 25060 },
  { x: new Date(2016, 1), y: 27980 },
  { x: new Date(2016, 2), y: 42800 },
  { x: new Date(2016, 3), y: 32400 },
  { x: new Date(2016, 4), y: 35260 },
  { x: new Date(2016, 5), y: 33900 },
  { x: new Date(2016, 6), y: 40000 },
  { x: new Date(2016, 7), y: 52500 },
  { x: new Date(2016, 8), y: 32300 },
  { x: new Date(2016, 9), y: 42000 },
  { x: new Date(2016, 10), y: 37160 },
  { x: new Date(2016, 11), y: 38400 },
  { x: new Date(2017, 0), y: 25060 },
  { x: new Date(2017, 1), y: 27980 },
  { x: new Date(2017, 2), y: 42800 },
  { x: new Date(2017, 3), y: 32400 },
  { x: new Date(2017, 4), y: 35260 },
  { x: new Date(2017, 5), y: 33900 },
  { x: new Date(2017, 6), y: 40000 },
  { x: new Date(2017, 7), y: 52500 },
  { x: new Date(2017, 8), y: 32300 },
  { x: new Date(2017, 9), y: 42000 },
  { x: new Date(2017, 10), y: 37160 },
  { x: new Date(2017, 11), y: 38400 },
  { x: new Date(2018, 0), y: 25060 },
  { x: new Date(2018, 1), y: 27980 },
  { x: new Date(2018, 2), y: 42800 },
  { x: new Date(2018, 3), y: 32400 },
  { x: new Date(2018, 4), y: 35260 },
  { x: new Date(2018, 5), y: 33900 },
  { x: new Date(2018, 6), y: 40000 },
  { x: new Date(2018, 7), y: 52500 },
  { x: new Date(2018, 8), y: 32300 },
  { x: new Date(2018, 9), y: 42000 },
  { x: new Date(2018, 10), y: 37160 },
  { x: new Date(2018, 11), y: 3400 },
  { x: new Date(2019, 0), y: 2060 },
  { x: new Date(2019, 1), y: 2980 },
  { x: new Date(2019, 2), y: 4800 },
  { x: new Date(2019, 3), y: 3400 },
  { x: new Date(2019, 4), y: 5260 },
  { x: new Date(2019, 5), y: 3900 },
  { x: new Date(2019, 6), y: 4000 },
  { x: new Date(2019, 7), y: 5500 },
  { x: new Date(2019, 8), y: 3300 },
  { x: new Date(2019, 9), y: 4200 },
  { x: new Date(2019, 10), y: 3160 },
  { x: new Date(2019, 11), y: 3800 },
  { x: new Date(2020, 0), y: 25060 },
  { x: new Date(2020, 1), y: 27980 },
  { x: new Date(2020, 2), y: 42800 },
  { x: new Date(2020, 3), y: 32400 },
  { x: new Date(2020, 4), y: 35260 },
  { x: new Date(2020, 5), y: 33900 },
  { x: new Date(2020, 6), y: 40000 },
  { x: new Date(2020, 7), y: 52500 },
  { x: new Date(2020, 8), y: 32300 },
  { x: new Date(2020, 9), y: 42000 },
  { x: new Date(2020, 10), y: 37160 },
  { x: new Date(2020, 11), y: 38400 },
];
const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Sales',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#7CDBAF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: chartData,
    },
  ],
};
const horizontalBarChartData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Dataset',
      backgroundColor: '#7CDBAF',
      borderColor: '#7CDBAF',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,0,54,0.4)',
      hoverBorderColor: 'rgb(0,88,101)',
      data: [65, 59, 80, 81, 56, 55, 55, 66, 86, 50, 77, 69],
    },
  ],
};
const polarChartData = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      label: 'My dataset', // for legend
    },
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
};
const useStyles = makeStyles({
  container: {
    paddingLeft: '2em',
    paddingRight: '2em',
  },
});

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* Cards container */}
      <Grid
        container
        className={classes.container}
        style={{
          flexWrap: 'nowrap',
          overflowX: 'auto',
          marginTop: '2em',
        }}
      >
        <DashboardCard
          cardStyle={{ minWidth: '17em' }}
          backgroundColor="#FDFFDB"
          icon={<AccessTime style={{ color: '#CB920D', fontSize: '4rem' }} />}
          heading="Pending Orders"
          number="04"
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#DBFFF2"
          icon={<DoneRounded style={{ color: '#7CDBAF', fontSize: '4rem' }} />}
          heading=" Completed Order"
          number="10"
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#FFDBDB"
          icon={
            <img
              src="/assets/refund.svg"
              style={{ color: '#7CDBAF', width: '3rem', height: '3rem' }}
            />
          }
          heading="Refund Request"
          number="02"
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#E3FFEC"
          icon={<CommentSharp style={{ color: '#5DEB88', fontSize: '3rem' }} />}
          heading="New Comments"
          number="04"
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#fff"
          icon={null}
          heading=""
          number=""
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#fff"
          icon={null}
          heading=""
          number=""
        />
        <DashboardCard
          cardStyle={{ marginLeft: '1em', minWidth: '17em' }}
          backgroundColor="#fff"
          icon={null}
          heading=""
          number=""
        />
      </Grid>
      {/* Charts Container */}
      <Grid
        container
        style={{ marginTop: '2em' }}
        className={classes.container}
      >
        <Grid item style={{ flex: 2 }}>
          <Grid container direction="column">
            <Grid item>
              <Card>
                <Typography
                  variant="h5"
                  style={{
                    marginTop: '0.3em',
                    fontWeight: '700',
                    alignSelf: 'flex-start',
                  }}
                >
                  Sales
                </Typography>
                <Grid container>
                  <Line data={data} width={150} height={200} />
                </Grid>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ marginTop: '1em' }}>
                <Typography
                  variant="h5"
                  style={{
                    marginTop: '0.3em',
                    fontWeight: '700',
                    alignSelf: 'flex-start',
                  }}
                >
                  Statistics
                </Typography>
                <Grid container>
                  <HorizontalBar
                    data={horizontalBarChartData}
                    width={150}
                    height={200}
                  />
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: '2em',
            marginRight: '1.3em',
            marginTop: matchesSM ? '1em' : 0,
            flex: 1,
          }}
        >
          <Card>
            <Typography
              variant="h5"
              style={{
                marginTop: '0.3em',
                fontWeight: '700',
                alignSelf: 'flex-start',
              }}
            >
              Product Categories
            </Typography>
            <Grid container>
              <Polar data={polarChartData} width={200} height={300} />
            </Grid>
          </Card>
        </Grid>
        <Grid
          item
          style={{
            flex: 2,
            marginTop: matchesSM ? '1em' : 0,
          }}
        >
          <Card>
            <Grid container direction="column">
              <Typography
                variant="h5"
                style={{
                  marginTop: '0.3em',
                  fontWeight: '700',
                  alignSelf: 'flex-start',
                }}
              >
                Recent Orders
              </Typography>
              {/* Item1 */}
              <Grid item>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ flexWrap: 'nowrap', marginTop: '2em' }}
                >
                  <Grid item>
                    <img
                      src="/assets/order1.png"
                      style={{ width: '8em', height: '8em' }}
                    />
                  </Grid>
                  <Grid item style={{ marginLeft: '1em' }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: '700',
                        marginBottom: '0.3em',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum
                    </Typography>
                    <Typography
                      variant="paragraph"
                      style={{
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
                      Ispum Lorem Ispum Lorem Ispum Lorem Ispum
                    </Typography>
                    <br />
                    <Typography
                      component={'a'}
                      href="#"
                      style={{
                        alignSelf: 'flex-start',
                        color: theme.palette.common.green,
                      }}
                    >
                      Read More
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* item2 */}
              <Grid item>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ flexWrap: 'nowrap', marginTop: '2em' }}
                >
                  <Grid item>
                    <img
                      src="/assets/order2.png"
                      style={{ width: '8em', height: '8em' }}
                    />
                  </Grid>
                  <Grid item style={{ marginLeft: '1em' }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: '700',
                        marginBottom: '0.3em',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum
                    </Typography>
                    <Typography
                      variant="body2"
                      paragraph
                      style={{
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
                      Ispum Lorem Ispum Lorem Ispum Lorem Ispum
                    </Typography>
                    <br />
                    <Typography
                      component={'a'}
                      href="#"
                      style={{
                        alignSelf: 'flex-start',
                        color: theme.palette.common.green,
                      }}
                    >
                      Read More
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Item3 */}
              <Grid item>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ flexWrap: 'nowrap', marginTop: '2em' }}
                >
                  <Grid item>
                    <img
                      src="/assets/order3.png"
                      style={{ width: '8em', height: '8em' }}
                    />
                  </Grid>
                  <Grid item style={{ marginLeft: '1em' }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: '700',
                        marginBottom: '0.3em',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum
                    </Typography>
                    <Typography
                      variant="paragraph"
                      style={{
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
                      Ispum Lorem Ispum Lorem Ispum Lorem Ispum
                    </Typography>
                    <br />
                    <Typography
                      component={'a'}
                      href="#"
                      style={{
                        alignSelf: 'flex-start',
                        color: theme.palette.common.green,
                      }}
                    >
                      Read More
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Item4 */}
              <Grid item>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ flexWrap: 'nowrap', marginTop: '2em' }}
                >
                  <Grid item>
                    <img
                      src="/assets/order4.png"
                      style={{ width: '8em', height: '8em' }}
                    />
                  </Grid>
                  <Grid item style={{ marginLeft: '1em' }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: '700',
                        marginBottom: '0.3em',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum
                    </Typography>
                    <Typography
                      variant="paragraph"
                      style={{
                        alignSelf: 'flex-start',
                      }}
                    >
                      Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
                      Ispum Lorem Ispum Lorem Ispum Lorem Ispum
                    </Typography>
                    <br />
                    <Typography
                      component={'a'}
                      href="#"
                      style={{
                        alignSelf: 'flex-start',
                        color: theme.palette.common.green,
                      }}
                    >
                      Read More
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <style global jsx>{`
          ::-webkit-scrollbar {
            width: 20px; /* <-- This sets the thickness of the VERTICAL scrollbar */
            height: 20px; /* <-- This sets the thickness of the HORIZONTAL scrollbar */
            color: '#5DEB88';
            background-color: '#5DEB88';
          }
        `}</style>
      </Grid>
    </>
  );
}
