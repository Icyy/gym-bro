import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import WorkoutCard from './WorkOutCard';

function HomePage({ user, workouts }) {
  // Filter the workouts array based on the logged in user's username
  const userWorkouts = workouts.filter(workout => workout.user === user);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user}!
      </Typography>

      {userWorkouts.length === 0 ? (
        <Typography variant="body1">  
          You don't have any previous workouts.
        </Typography>
      ) : (
        userWorkouts.map(workout => (
          <Grid item xs={12} sm={6} key={workout.workoutName}>
          <WorkoutCard workout={workout} />
        </Grid>
        ))
      )}
    </div>
  );
}

export default HomePage;
