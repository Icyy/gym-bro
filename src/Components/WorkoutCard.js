import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem',
  },
  title: {
    fontSize: 24,
  },
});

function WorkoutCard({ workoutName, exercises }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {workoutName}
        </Typography>
        <List>
          {exercises.map((exercise) => (
            <ListItem key={exercise.exerciseName}>
              <ListItemText
                primary={exercise.exerciseName}
                secondary={`Sets: ${exercise.sets.length}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

WorkoutCard.propTypes = {
  workoutName: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      exerciseName: PropTypes.string.isRequired,
      sets: PropTypes.arrayOf(
        PropTypes.shape({
          weight: PropTypes.number.isRequired,
          reps: PropTypes.number.isRequired,
          notes: PropTypes.string,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default WorkoutCard;
