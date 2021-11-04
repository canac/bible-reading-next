import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { format } from 'date-fns';
import React from 'react';
import {
  useCompleteDayMutation,
  useUncompleteDayMutation,
} from '../generated/graphql';
import styles from '../styles/JourneyDay.module.css';

type JourneyDayProps = {
  day: {
    plan_journey_day_id: number;
    completed: boolean;
    completed_date?: string | null;
    plan_day: {
      day: number;
      plan_day_passages: Array<{
        passage: string;
      }>;
    };
  };
};

export default function JourneyDay(props: JourneyDayProps): JSX.Element | null {
  const [, completeDay] = useCompleteDayMutation();
  const [, uncompleteDay] = useUncompleteDayMutation();

  return (
    <Card
      className={styles['journey-day']}
      sx={
        props.day.completed
          ? {
              backgroundColor: green[100],
            }
          : {}
      }
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={styles.header}
        >
          Day #{(props.day.plan_day?.day ?? 0) + 1}
        </Typography>
        <List>
          {props.day?.plan_day?.plan_day_passages?.map?.((passage, index) => (
            <ListItem key={index}>
              <ListItemText primary={passage.passage} />
            </ListItem>
          ))}
        </List>
        <Typography
          style={{
            visibility: props.day.completed_date ? 'visible' : 'hidden',
          }}
        >
          Completed on{' '}
          <strong>
            {props.day.completed_date &&
              format(new Date(props.day.completed_date), 'MMM d, yyyy')}
          </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.day.completed}
              onChange={(event) => {
                let { plan_journey_day_id } = props.day;
                if (event.target.checked) {
                  completeDay({
                    plan_journey_day_id,
                    completed_date: new Date().toISOString(),
                  });
                } else {
                  uncompleteDay({
                    plan_journey_day_id,
                  });
                }
              }}
              name="completed"
              color="primary"
            />
          }
          label="Completed"
        />
      </CardActions>
    </Card>
  );
}
