import type { NextPage } from 'next';
import { useLoadPlansQuery } from '../../generated/graphql';
import Plan from '../../components/Plan';
import { Grid } from '@mui/material';

const NewJourney: NextPage = () => {
  const [result] = useLoadPlansQuery();

  return (
    <Grid container spacing={3}>
      {(result.data?.plan ?? []).map((plan) => (
        <Grid item xs={12} md={6} lg={3} xl={2} key={plan.plan_id}>
          <Plan
            plan={{
              plan_id: plan.plan_id,
              name: plan.name,
              length: plan.plan_days_aggregate?.aggregate?.count ?? null,
              journeys: plan.plan_journeys_aggregate?.aggregate?.count ?? null,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewJourney;
