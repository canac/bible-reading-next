import Link from 'next/link';
import { Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import styles from '../styles/JourneySummary.module.css';

type JourneyProps = {
  journey: {
    plan_journey_id: number;
    name: string;
    dayCount: number | null;
    startedDate: string | null;
    completedDayCount: number | null;
  };
};

export default function JourneySummary({
  journey,
}: JourneyProps): JSX.Element | null {
  return (
    <Link href={`/journey/${journey.plan_journey_id}`} passHref>
      <Card className={styles['journey-summary']}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={styles.header}
          >
            {journey.name}
          </Typography>
          {journey.dayCount !== null && journey.completedDayCount !== null ? (
            <Typography>
              {journey.completedDayCount}/{journey.dayCount} days completed
            </Typography>
          ) : null}
          {journey.startedDate !== null && (
            <Typography>
              Started on {format(new Date(journey.startedDate), 'MMM d, yyyy')}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
