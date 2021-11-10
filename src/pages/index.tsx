import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import { useLoadJourneysQuery } from '../generated/graphql';
import JourneySummary from '../components/JourneySummary';

const Journeys: NextPage = () => {
  const [result] = useLoadJourneysQuery();

  return (
    <Grid container spacing={3}>
      {(result.data?.plan_journey ?? []).map((journey) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          xl={2}
          key={journey.plan_journey_id}
          sx={{ display: 'grid' }}
        >
          <JourneySummary
            journey={{
              plan_journey_id: journey.plan_journey_id,
              name: journey.plan.name,
              dayCount:
                journey.plan.plan_days_aggregate?.aggregate?.count ?? null,
              startedDate:
                journey.plan_journey_days_aggregate?.aggregate?.min
                  ?.completed_date ?? null,
              completedDayCount:
                journey.plan_journey_days_aggregate?.aggregate?.count ?? null,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Journeys;
