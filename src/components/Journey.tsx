import React from 'react';
import JourneyDay from './JourneyDay';
import { useLoadJourneyQuery } from '../generated/graphql';

export default function Journey(): JSX.Element | null {
  const [journeyResult] = useLoadJourneyQuery({
    variables: { plan_journey_id: 1 },
  });

  const days = journeyResult?.data?.plan_journey?.plan_journey_days;

  return (
    <>
      {days &&
        days.map((day) => (
          <JourneyDay key={day.plan_journey_day_id} day={day} />
        ))}
    </>
  );
}
