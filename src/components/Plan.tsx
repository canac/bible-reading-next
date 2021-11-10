import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { useBeginJourneyMutation } from '../generated/graphql';
import styles from '../styles/Plan.module.css';

type PlanProps = {
  plan: {
    plan_id: number;
    name: string;
    length: number | null;
    journeys: number | null;
  };
};

export default function Plan({ plan }: PlanProps): JSX.Element | null {
  const router = useRouter();
  const [_, beginJourney] = useBeginJourneyMutation();

  async function startPlan() {
    const result = await beginJourney({ plan_id: plan.plan_id });
    const planJourneyId = result.data?.insert_plan_journey_one?.plan_journey_id;
    if (planJourneyId !== undefined) {
      router.push(`/journey/${planJourneyId}`);
    }
  }

  return (
    <Card className={styles['plan']}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={styles.header}
        >
          {plan.name}
        </Typography>
        {plan.length !== null && (
          <Typography>{plan.length} days long</Typography>
        )}
        {plan.journeys !== null && (
          <Typography>{plan.journeys} journeys</Typography>
        )}
      </CardContent>
      <CardActions className={styles['button-container']}>
        <Button variant="contained" onClick={startPlan}>
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
